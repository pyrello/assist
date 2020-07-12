<?php

namespace App\Services;
use File;
use ZipArchive;

class ZipCreator
{
    /**
     * The files that will be included in the zip archive
     *
     * @var array
     */
    protected $files;

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

    public function __construct($name, $files, $path = null)
    {
        $this->files = $files;

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
        $zip = new ZipArchive;

        if ($zip->open($this->filePath(), ZipArchive::CREATE) === true) {
            foreach ($this->files as $file) {
                $zip->addFile($file);
            }

            $zip->close();
        }
    }

    public function generateIfExpired()
    {
        if ($this->isExpired()) {
            $this->generate();
        }
    }

    public function filePath()
    {
        return $this->path . '/' . $this->name;
    }
}
