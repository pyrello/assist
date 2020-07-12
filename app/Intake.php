<?php

namespace App;

use App\Traits\Noteable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Intake extends Model
{
    use Noteable, SoftDeletes;

    public static $rules = [
        'advocate_id' => 'required',
        'date' => 'required',
    ];
    public $fillable = [
        'advocate_id',
        'client_id',
        'date',
        'referred_by_id',
        'info'
    ];
    protected $appends = ['noteable_type'];
    protected $casts = [
        'client_id' => 'integer',
        'info' => 'array',
    ];

    public function advocate()
    {
        return $this->belongsTo(Advocate::class);
    }

    public function abuseRelationships()
    {
        return $this->hasManyThrough(AbuseRelationship::class, Client::class);
    }

    public function client()
    {
        return $this->hasOne(Client::class);
    }

    public function referredBy()
    {
        return $this->belongsTo(ReferralSource::class, 'referred_by_id');
    }
}
