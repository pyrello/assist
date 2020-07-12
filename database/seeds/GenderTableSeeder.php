<?php

use App\Gender;
use Illuminate\Database\Seeder;

class GenderTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $genders = [
            'female',
            'male',
            'transgender (f)',
            'transgender (m)',
            'intersex',
            'agender/neutral',
            'other',
            'unknown',
        ];

        foreach ($genders as $name) {
            Gender::create(compact('name'));
        }
    }
}
