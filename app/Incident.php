<?php

namespace App;

use App\Traits\Noteable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Incident extends Model
{
    use Noteable, SoftDeletes;

    public $fillable = [
        'advocate_id',
        'client_id',
        'date',
        'client_age',
        'incident_type_id',
        'state',
        'city',
    ];
    protected $appends = ['noteable_type'];
    protected $casts = [
        'client_id' => 'integer',
    ];
    protected $dates = ['date'];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function abusers()
    {
        return $this->belongsToMany(Abuser::class);
    }

    public function advocate()
    {
        return $this->belongsTo(Advocate::class);
    }

    public function client()
    {
        return $this->belongsTo(Client::class);
    }

    public function type()
    {
        return $this->belongsTo(IncidentType::class, 'incident_type_id');
    }

    public function referredBy()
    {
        return $this->belongsTo(ReferralSource::class, 'referred_by_id');
    }
}
