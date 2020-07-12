<?php

namespace App\Services;

use App\Abuser;
use App\Client;
use App\Ethnicity;
use App\Incident;

class AbuserService
{
    /**
     * Create an Abuser.
     *
     * @param array $data
     * @return Abuser
     */
    public static function create(array $data = [])
    {
        /** @var Abuser $abuser */
        $abuser = Abuser::create($data);

        if ($abuser) {

            // Add ethnicity
            if (!empty($data['ethnicity_ids'])) {
                static::attachEthnicity($abuser, $data['ethnicity_ids']);
            }
        }

        return $abuser;
    }

    /**
     * Update an Abuser.
     *
     * @param Abuser $abuser
     * @param array $data
     * @return Abuser
     */
    public static function update(Abuser &$abuser, array $data = [])
    {
        $abuser->update($data);

        if (!is_null($incident_id = $data['incident_id'])) {
            $abuser->incidents()->attach($incident_id);
        }
        return $abuser;
    }

    /**
     * Attach ethnicity to the abuser.
     *
     * @param Abuser $abuser
     * @param array $ids
     */
    public static function attachEthnicity(Abuser &$abuser, array $ids = [])
    {
        $abuser->ethnicity()->attach(static::createEthnicityAttachment($ids));
    }

    /**
     * Sync ethnicity to the abuser.
     *
     * @param Abuser $abuser
     * @param array $ids
     */
    public static function syncEthnicity(Abuser &$abuser, array $ids = [])
    {
        $abuser->ethnicity()->sync(static::createEthnicityAttachment($ids));
    }

    protected static function createEthnicityAttachment(array $ids = [])
    {
        return array_map(function($order) {
            return ['order' => $order];
        }, array_flip($ids));
    }

    /**
     * @param Client $client
     * @param array $data
     */
    public static function createAbuseRelationships(Client &$client, array $data = [])
    {
        foreach($data as $attributes) {

            if (empty($attributes['abuser_id']) && !empty($attributes['abuser'])) {
                $abuser = Abuser::create($attributes['abuser']);
                $client->abuseRelationships()->create(['abuser_id' => $abuser->id] + $attributes);
            }
            else {
                $client->abuseRelationships()->create($attributes);
            }
        }
    }
}
