<?php

use App\Ethnicity;
use Illuminate\Database\Seeder;

class EthnicityTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $ethnicity = [
            'African American',
            'Alaska Native',
            'American Indian',
            'Asian',
            'Caucasian',
            'Hispanic/Latino/Latina',
            'Native Hawaiian/Pacific Islander',
            'Other',
            'Not Reported',
            'Not Tracked',
        ];

        foreach ($ethnicity as $name) {
            Ethnicity::create(compact('name'));
        }
    }
}
