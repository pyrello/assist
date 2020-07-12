<?php

namespace App;

use App\Traits\Noteable;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Dependent extends Model
{
    use Noteable, SoftDeletes;

    public $fillable = [
        'advocate_id',
        'client_id',
        'name',
        'gender',
        'housing_status',
        'birth_date',
    ];

    protected $dates = ['birth_date', 'deleted_at'];
    protected $appends = ['noteable_type'];

    /**
     * Return an age attribute.
     *
     * @return int
     */
    public function getAgeAttribute()
    {
        return Carbon::now()->diffInYears($this->birth_date);
    }

    /**
     * Client relation.
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function client()
    {
        return $this->belongsTo(Client::class);
    }

    /**
     * Ethnicity relation.
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     **/
    public function ethnicity()
    {
        return $this->belongsToMany(Ethnicity::class)->withPivot('order');
    }
}
