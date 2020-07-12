<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
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
