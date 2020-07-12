<?php

use App\IncidentType;
use Illuminate\Database\Seeder;

class IncidentTypesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $items = [
            "Domestic Abuse",
            "Dating Violence",
            "Sexual Abuse",
            "Survivors of Child Sexual Abuse &/or Incest",
            "Arson",
            "Assault, including Willful Injury, Terrorism, Hazing, & Other Assaultive Crimes",
            "Bullying (Verbal, Cyber, or Physical)",
            "Burglary",
            "Physical Abuse",
            "Child Pornography",
            "Drunk/Intoxicated Driver Crashes, OTI Victims",
            "Elder Abuse or Neglect by a caretaker or family member",
            "Hate Crime: Racial/Religious/Gender/Sexual Orientation/Other",
            "Human Trafficking, Labor",
            "Human Trafficking, Sexual",
            "Identity Theft/Fraud/Financial Crime",
            "Kidnapping (Custodial)",
            "Kidnapping (Non-custodial)",
            "Mass Violence (Domestic/International)",
            "Robbery",
            "Stalking, including Harassment, Cyber-stalking, Online Harassment",
            "Survivors of Homicide Victims",
            "Terrorism",
            "Identity Theft",
            "Violation of a Protective Order",
        ];

        foreach ($items as $name) {
            IncidentType::create(compact('name'));
        }
    }
}
