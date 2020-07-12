<?php

use App\VictimType;
use Illuminate\Database\Seeder;

class ReferralSourcesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $items = [
            "Courts",
            "Correction Official (jailor, Dept. of Correction staff, BEP, etc.)",
            "Domestic Abuse Comprehensive Programs",
            "Government: Department of Human Services, etc.",
            "Healthcare Providers, Health Departments, Clinics, etc.",
            "Law Enforcement",
            "Prosecution/Victim Witness Coordinators",
            "Schools, Universities, Colleges, etc.",
            "Sexual Abuse Comprehensive Program",
            "Shelter-Based Victim Service Program",
            "Therapists and Counselors",
            "Victim Shelter Program",
            "Media",
            "Friend/Family",
            "Employer/Business",
        ];

        foreach ($items as $name) {
            \App\ReferralSource::create(compact('name'));
        }
    }
}
