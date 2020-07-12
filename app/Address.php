<?php

namespace App;

use Eloquent as Model;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * Class Address
 * @package App\Models
 * @version January 11, 2017, 10:36 pm UTC
 */
class Address extends Model
{
    use SoftDeletes;

    public $table = 'addresses';

    public $fillable = [
        'street',
        'apt',
        'state',
        'county',
        'city',
        'zip',
    ];

    /**
     * The attributes that should be casted to native types.
     *
     * @var array
     */
    protected $casts = [
        //'street' => 'string',
        //'apt' => 'string',
        //'state' => 'string',
        //'county' => 'string',
        //'city' => 'string',
        //'zip' => 'string',
    ];

    /**
     * Validation rules
     *
     * @var array
     */
    public static $rules = [
        'street' => 'required',
        'state' => 'required',
        'county' => 'required',
        'city' => 'required',
        'zip' => 'required',
    ];

}
