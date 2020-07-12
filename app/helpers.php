<?php

use Illuminate\Support\Debug\Dumper;
use Symfony\Component\VarDumper\Dumper\CliDumper;
use Symfony\Component\VarDumper\Cloner\VarCloner;

if (! function_exists('debug')) {
    /**
     * Dump the passed variables and end the script.
     *
     * @param  mixed
     * @return void
     */
    function debug(...$args)
    {
        foreach ($args as $var) {
            $lines = [];
            $dumper = new Symfony\Component\VarDumper\Dumper\CliDumper();
            $dumper->setColors(true);
            $dumper->setOutput(function ($line) use (&$lines) {
                $lines[] = print_r($line, true);
            });

            $dumper->dump((new Symfony\Component\VarDumper\Cloner\VarCloner())->cloneVar($var));

            Log::debug(implode(PHP_EOL, $lines));
        }
    }
}
