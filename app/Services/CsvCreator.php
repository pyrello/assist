<?php

namespace App\Services;
use File;

class CsvCreator
{
    /**
     * The data that the download file will be created with
     *
     * @var array
     */
    protected $data;

    /**
     * The name of the download file
     *
     * @var string
     */
    protected $name = '';

    /**
     * The path where the download will be created
     *
     * @var null|string
     */
    protected $path = '';

    public function __construct($name, array $data, $path = null)
    {
        $this->name = $name;
        $this->data = $data;

        if (is_null($path)) {
            $path = storage_path('app/public/reports');
        }

        $this->path = $path;
    }

    public function getDownload()
    {
        $this->generateIfExpired();

        return $this->filePath();
    }

    public function isExpired()
    {
        $cacheTimestamp = File::exists($this->filePath()) ? File::lastModified($this->filePath()) : 0;
        $now = time();

        return $now > ($cacheTimestamp + config('cache.lifetime'));
    }

    public function generate()
    {
        $fp = fopen($this->filePath(), 'w');

        foreach ($this->data as $k => $v) {
            fputcsv($fp, [$k, $v]);
        }

        fclose($fp);
    }

    public function generateIfExpired()
    {
        if ($this->isExpired()) {
            $this->generate();
        }
    }

    public function filePath()
    {
        return $this->path . '/' . $this->name . '.csv';
    }
}
