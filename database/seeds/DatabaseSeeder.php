<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call(AdvocatesTableSeeder::class);
        $this->call(LocalitiesTableSeeder::class);
        $this->call(EthnicityTableSeeder::class);
        $this->call(GenderTableSeeder::class);
        $this->call(IncidentTypesTableSeeder::class);
        $this->call(ReferralSourcesTableSeeder::class);
    }
}
