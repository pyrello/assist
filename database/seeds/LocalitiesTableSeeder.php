<?php

use App\City;
use App\County;
use App\State;
use GuzzleHttp\Client;
use Illuminate\Database\Seeder;

class LocalitiesTableSeeder extends Seeder
{
    protected $client;

    public function __construct()
    {
        $this->client = new Client();
    }

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $states = [
            'AL' => 'Alabama',
            'AK' => 'Alaska',
            'AZ' => 'Arizona',
            'AR'=>'Arkansas',
            'CA'=>'California',
            'CO'=>'Colorado',
            'CT'=>'Connecticut',
            'DE'=>'Delaware',
            'DC'=>'District of Columbia',
            'FL'=>'Florida',
            'GA'=>'Georgia',
            'HI'=>'Hawaii',
            'ID'=>'Idaho',
            'IL'=>'Illinois',
            'IN'=>'Indiana',
            'IA'=>'Iowa',
            'KS'=>'Kansas',
            'KY'=>'Kentucky',
            'LA'=>'Louisiana',
            'ME'=>'Maine',
            'MD'=>'Maryland',
            'MA'=>'Massachusetts',
            'MI'=>'Michigan',
            'MN'=>'Minnesota',
            'MS'=>'Mississippi',
            'MO'=>'Missouri',
            'MT'=>'Montana',
            'NE'=>'Nebraska',
            'NV'=>'Nevada',
            'NH'=>'New Hampshire',
            'NJ'=>'New Jersey',
            'NM'=>'New Mexico',
            'NY'=>'New York',
            'NC'=>'North Carolina',
            'ND'=>'North Dakota',
            'OH'=>'Ohio',
            'OK'=>'Oklahoma',
            'OR'=>'Oregon',
            'PA'=>'Pennsylvania',
            'RI'=>'Rhode Island',
            'SC'=>'South Carolina',
            'SD'=>'South Dakota',
            'TN'=>'Tennessee',
            'TX'=>'Texas',
            'UT'=>'Utah',
            'VT'=>'Vermont',
            'VA'=>'Virginia',
            'WA'=>'Washington',
            'WV'=>'West Virginia',
            'WI'=>'Wisconsin',
            'WY'=>'Wyoming',
        ];

        $census_data = Cache::rememberForever('lists:states:all', function() {

            $response = $this->client->get('http://api.census.gov/data/2010/dec/sf1?for=state:*&get=NAME&key='.config('services.census.key'));
            $body = $response->getBody();
            $census_data = json_decode($body);
            array_shift($census_data);

            return $census_data;
        });

        //print("Cached states\n");

        foreach($states as $abbr => $name) {
            if (NULL !== $census_k = array_search($name, array_column($census_data, 0))) {
                $fips_id = $census_data[$census_k][1];
                $state = State::create([
                    'name' => $name,
                    'abbr' => strtolower($abbr),
                ]);

                $this->importCountyData($fips_id, $state);
                $this->importCityData($fips_id, $state);
            }
        }
    }

    protected function importCountyData($fips_id, State $state)
    {
        $census_data = Cache::rememberForever('lists:states:' . $state->name . ':counties:all', function() use ($fips_id) {

            $response = $this->client->get('http://api.census.gov/data/2010/dec/sf1?for=county:*&in=state:'.$fips_id.'&get=NAME&key='.config('services.census.key'));

            $body = $response->getBody();
            $census_data = json_decode($body);
            array_shift($census_data);

            return $census_data;
        });

        foreach($census_data as $item) {
            County::create([
                'state_id' => $state->id,
                'name' => $item[0],
            ]);
        }
    }

    protected function importCityData($fips_id, State $state)
    {
        $census_data = Cache::rememberForever('lists:states:' . $state->name . ':cities:all', function() use ($fips_id) {
            $response = $this->client->get('http://api.census.gov/data/2010/dec/sf1?for=place:*&in=state:'.$fips_id.'&get=NAME&key='.config('services.census.key'));

            $body = $response->getBody();
            $census_data = json_decode($body);
            array_shift($census_data);

            return $census_data;
        });

        $replace = [' city', ' CDP', ' town'];

        foreach($census_data as $item) {
            City::create([
                'state_id' => $state->id,
                'name' => str_replace($replace, '', $item[0]),
            ]);
        }
    }
}
