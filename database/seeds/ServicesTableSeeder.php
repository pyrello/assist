<?php

use App\Service;
use Illuminate\Database\Seeder;

class ServicesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $items = [
            'Civil Legal Advocacy' => 'Matters of divorce, child custody, landlord/tenant, etc… (non-criminal)',
            'Crime Victim Compensation Assistance & Advocacy' => 'helping victim apply, document, etc.',
            'Criminal Justice Support & Advocacy' => 'assisting with no-contact orders, criminal proceedings.',
            'Economic Advocacy' => "Support, assist, or advocate for a victim in seeking or maintaining  employment, transportation, or financial issues.  Opening bank account, dealing with credit history, applying for jobs, advocacy for women who lost job/might lose job or abuser's actions, etc.",
            'Financial Assistance' => 'Financial assistance such as payment of school fees, utilities, food, etc.',
            'Follow-Up' => 'This can include any type of follow up with a victim or on behalf of a victim.',
            'Group Counseling & Support' => 'Bringing victim to support group or attending group with a victim.',
            'Housing: Rent/Deposit/Utility' => 'Provided with Money for Rent/Deposit/Utility costs by program.',
            'Housing: Other Financial Assistance' => 'Provided with other Direct Financial Assistance by program.',
            'Housing Advocacy' => ' Support, assist, or advocate for a victim in seeking housing.  Searching for apartment/houses, etc., applying for mortgage, etc.  (Rapid rehousing services go here.)',
            'Individual Counseling' => 'Counseling with a victim or arranging/transporting a victim to session',
            'Information & Referral' => 'Informing a victim about his or her rights, DV101, agency referrals, etc.',
            'Medical Support & Advocacy' => 'Taking victim to med. appt., assisting with payment of bills, etc.',
            'Personal Advocacy' => 'Advocating on behalf of a victim either in person or on the phone.  Examples are childcare, education for child, advocating with other agencies not already identified, etc.',
            'Shelter/Housing Assessment' => 'Conducted Housing/Shelter Needs Assessment.',
            'Therapy' => 'This is more focused therapy (not support groups) and can include small-group.',
            'Transportation' => 'Transporting a victim or assisting a victim in obtaining transport (ie: bus tickets).',
            'Victim Registration & Notification' => 'Providing information to the victim or assisting the victim.',
        ];

        foreach ($items as $name => $description) {
            Service::create(compact('name', 'description'));
        }
    }
}
