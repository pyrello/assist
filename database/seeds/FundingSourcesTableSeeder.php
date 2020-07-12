<?php

use App\FundingSource;
use Illuminate\Database\Seeder;

class FundingSourcesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $items = [
            'Admin',
            'DA-DAC',
            'DA-SH',
            'ESG-Rapid Rehousing',
            'Fundraising',
            'IAP',
            'JP Morgan',
            'NI - LA',
            'Pet Funds',
            'Shelter',
            'UI',
            'W/VB DECAT',
        ];

        foreach ($items as $name) {
            FundingSource::create(compact('name'));
        }
    }
}
