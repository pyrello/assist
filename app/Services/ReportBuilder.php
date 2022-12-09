<?php

namespace App\Services;

class ReportBuilder
{
    public $models = [];

    public function __construct(array $models = [])
    {
//        logger('Models: ' . print_r($models, true));
        $this->models = $models;
    }

    public function loadModels(array $models = [])
    {
        $this->models = $models;
    }

    public function getModels()
    {
        return $this->models;
    }
}
