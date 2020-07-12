<?php

namespace App\Services;

use App\Abuser;
use App\Client;
use App\Ethnicity;
use App\Incident;

class ClientService
{
    public static function create($data)
    {
        /** @var Client $client */
        $client = Client::create($data);

        if ($client) {

            // Address
            if (!empty($data['address'])) {
                static::createAddress($client, $data['address']);
            }

            // Add ethnicity
            if (!empty($data['ethnicity_ids'])) {
                static::attachEthnicity($client, $data['ethnicity_ids']);
            }
        }

        return $client;
    }

    /**
     * Attach ethnicity to the client.
     *
     * @param Client $client
     * @param array $ids
     */
    public static function attachEthnicity(Client &$client, array $ids = [])
    {
        $client->ethnicity()->attach(static::createEthnicityAttachment($ids));
    }

    /**
     * Sync ethnicity to the client
     * @param Client $client
     * @param array $ids
     */
    public static function syncEthnicity(Client &$client, array $ids = [])
    {
        $client->ethnicity()->sync(static::createEthnicityAttachment($ids));
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
                $abuser = AbuserService::create($attributes['abuser']);
                $client->abuseRelationships()->create(['abuser_id' => $abuser->id] + $attributes);
            }
            else {
                $client->abuseRelationships()->create($attributes);
            }
        }
    }

    /**
     * Attach an address to the client, if there are any fields.
     *
     * @param Client $client
     * @param array $attributes
     */
    public static function createAddress(Client &$client, array $attributes = [])
    {
        if (static::checkAddressIsValid($attributes)) {
            $address = $client->address()->create($attributes);
            $client->address()->associate($address);
            $client->save();
        }
    }

    /**
     * Update a client's address. If the address already exists, update if fields are
     * passed through with new information.
     * @param Client $client
     * @param array $attributes
     */
    public static function updateAddress(Client &$client, array $attributes = [])
    {
        $address_exists = !empty($client->address_id);

        if ($address_exists) {
            if (static::checkAddressIsValid($attributes)) {
                $client->address()->update($attributes);
            }
            // Todo: consider when and if to delete the address
        } else {
            static::createAddress($client, $attributes);
        }
    }

    /**
     * Check if an address is valid to be saved. An address is only valid if
     * it has at least one field included.
     *
     * @param array $attributes
     * @return bool
     */
    protected static function checkAddressIsValid(array $attributes = [])
    {
        if (!empty($attributes)) {
            $address_fields = 0;
            foreach ($attributes as $field) {
                if (!empty($field)) {
                    $address_fields++;
                }
            }
            return $address_fields > 0;
        }

        return false;
    }

    /**
     * Create a phone number relation
     *
     * @param Client $client
     * @param $data
     */
    public static function createPhones(Client &$client, $data)
    {
        $client->phones()->createMany($data);
    }

    /**
     * Create multiple incident relations
     * @param Client $client
     * @param array $data
     */
    public static function createIncidents(Client &$client, array $data = [])
    {
        foreach($data as $attributes) {
            static::createIncident($client, $attributes);
        }
    }

    /**
     * Create an Incident relation.
     *
     * @param Client $client
     * @param array $attributes
     */
    public static function createIncident(Client &$client, array $attributes = [])
    {
        logger('client: ' . print_r($client->toArray(), true));
        /** @var Incident $incident */
        $incident = $client->incidents()->create(['advocate_id' => $client->advocate_id] + $attributes);

        if (!empty($attributes['note'])) {
            $incident->notes()->create([
                'advocate_id' => $client->advocate_id,
                'client_id' => $client->id,
                'content' => $attributes['note'],
            ]);
        }
    }

    /**
     * Create a Household relation.
     *
     * @param Client $client
     * @param array $attributes
     */
    public static function createHousehold(Client &$client, array $attributes = [])
    {
        $client->household()->create($attributes);
    }

    /**
     * Update the Household relation.
     *
     * @param Client $client
     * @param array $attributes
     */
    public static function updateHousehold(Client &$client, array $attributes = [])
    {
        if (is_null($client->household)) {
            static::createHousehold($client, ['client_id' => $client->id] + $attributes);
        } else {
            $client->household()->update($attributes);
        }
    }
}
