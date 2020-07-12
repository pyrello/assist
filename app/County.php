<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

/**
 * Class County
 * @package App\Models
 * @version January 11, 2017, 5:42 am UTC
 */
class County extends Model
{
    public $table = 'counties';

    public $fillable = [
        'slug',
        'label',
        'state_id'
    ];

    /**
     * The attributes that should be casted to native types.
     *
     * @var array
     */
    protected $casts = [
        'slug' => 'string',
        'label' => 'string',
        'state_id' => 'integer'
    ];

    /**
     * Validation rules
     *
     * @var array
     */
    public static $rules = [
        'slug' => 'required',
        'label' => 'required',
        'state_id' => 'required'
    ];

    public $timestamps = false;

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     **/
    public function state()
    {
        return $this->belongsTo(\App\Models\State::class);
    }
}
