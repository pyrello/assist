<?php

namespace App\Services;

use App\Intake;

class IntakeService
{
    public static function create($data)
    {
        logger('intake data: ' . print_r($data, true));
        /** @var Intake $intake */
        $intake = Intake::create([
            'date' => $data['date'],
            'advocate_id' => $data['advocate_id'],
            'referred_by_id' => $data['referred_by_id'],
        ]);

        $client = ClientService::create($data['client'] + ['intake_id' => $intake->id]);

        if ($client) {

            // Create phone numbers
            if (!empty($data['phones'])) {
                ClientService::createPhones($client, $data['phones']);
            }

            // Create incidents
            if (!empty($data['incidents'])) {
                ClientService::createIncidents($client, $data['incidents']);
            }

            // If instances of abuse were added...
            if (!empty($data['abuses'])) {
                ClientService::createAbuseRelationships($client, $data['abuses']);
            }

            if (!empty($data['household'])) {
                ClientService::createHousehold($client, ['client_id' => $client->id] + $data['household']);
            }

            if (!empty($data['dependents'])) {
                $client->dependents()->createMany($data['dependents']);
            }

            if (!empty($data['notes'])) {
                foreach($data['notes'] as $note) {
                    $intake->notes()->create(['client_id' => $client->id, 'advocate_id' => $data['advocate_id']] + $note);
                }
            }
        }

        $intake->load('abuseRelationships.abuser', 'client', 'advocate');

        return compact('intake', 'client');
    }
}
