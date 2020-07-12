<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

/**
 * Class State
 * @package App\Models
 * @version January 11, 2017, 5:23 am UTC
 */
class State extends Model
{
    public $table = 'states';

    public $fillable = [
        'slug',
        'label'
    ];

    /**
     * The attributes that should be casted to native types.
     *
     * @var array
     */
    protected $casts = [
        'slug' => 'string',
        'label' => 'string'
    ];

    /**
     * Validation rules
     *
     * @var array
     */
    public static $rules = [
        'slug' => 'required,min:2',
        'label' => 'required'
    ];

    public $timestamps = false;

    
}
