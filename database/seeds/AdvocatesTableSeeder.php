<?php

use App\Advocate;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class AdvocatesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $advocates = [
            ['Example Advocate', 'advocate@agency.org'],
            ['Volunteer', 'volunteer@agency.org'],
            ['Intern', 'intern@agency.org'],
        ];

        foreach ($advocates as $advocate) {
            $default = ['', ''];
            list($first_name, $last_name) = explode(' ', $advocate[0], 2) + $default;

            $email = $advocate[1];

            $password = Hash::make(str_random(12));

            $role = isset($advocate[2]) ? $advocate[2] : null;

            Advocate::create(compact('first_name', 'last_name', 'email', 'role', 'password'));
        }

        Advocate::create([
            'first_name' => 'Developer',
            'last_name' => 'Account',
            'email' => 'developer@example.org',
            'role' => 'admin',
            'password' => Hash::make(env('DEVELOPER_PASSWORD', str_random(12))),
        ]);
    }
}
