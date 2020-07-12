<?php

namespace App\Services;

use App\Abuser;
use App\Client;
use App\Dependent;
use App\Ethnicity;

class DependentService
{
    /**
     * Create an Abuser.
     *
     * @param array $data
     * @return Dependent
     */
    public static function create(array $data = [])
    {
        /** @var Dependent $dependent */
        $dependent = Dependent::create($data);

        if ($dependent) {

            // Add ethnicity
            if (!empty($data['ethnicity_ids'])) {
                static::attachEthnicity($dependent, $data['ethnicity_ids']);
            }
        }

        return $dependent;
    }

    /**
     * Update an Abuser.
     *
     * @param Dependent $dependent
     * @param array $data
     * @return Dependent
     */
    public static function update(Dependent &$dependent, array $data = [])
    {
        $dependent->update($data);

        if (!empty($data['ethnicity_ids'])) {
            static::syncEthnicity($dependent, $data['ethnicity_ids']);
        }

        return $dependent;
    }

    /**
     * Attach ethnicity to the abuser.
     *
     * @param Dependent $dependent
     * @param array $ids
     */
    public static function attachEthnicity(Dependent &$dependent, array $ids = [])
    {
        $dependent->ethnicity()->attach(static::createEthnicityAttachment($ids));
    }

    /**
     * Sync ethnicity to the abuser.
     *
     * @param Dependent $dependent
     * @param array $ids
     */
    public static function syncEthnicity(Dependent &$dependent, array $ids = [])
    {
        $dependent->ethnicity()->sync(static::createEthnicityAttachment($ids));
    }

    /**
     * Helper function to create ordered ethnicity list.
     *
     * @param array $ids
     * @return array
     */
    protected static function createEthnicityAttachment(array $ids = [])
    {
        return array_map(function($order) {
            return ['order' => $order];
        }, array_flip($ids));
    }
}
