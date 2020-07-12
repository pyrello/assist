<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class FundingSource extends Model
{
    public $fillable = [
        'name',
    ];

    public $timestamps = false;
}
