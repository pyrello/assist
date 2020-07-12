<?php

namespace App;

use App\Traits\Noteable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Activity extends Model
{
    use Noteable, SoftDeletes;

    public $fillable = [
        'advocate_id',
        'client_id',
        'incident_id',
        'requested_service_id',
        'service_provided',
        'why_not_provided',
        'started_at',
        'ended_at',
        'duration',
        'client_age',
        'funding_source_id',
        'state',
        'city',
    ];
    protected $dates = ['started_at', 'ended_at'];
    protected $appends = ['noteable_type', 'service_name'];

    public function advocate()
    {
        return $this->belongsTo(Advocate::class);
    }

    public function client()
    {
        return $this->belongsTo(Client::class);
    }

    public function incident()
    {
        return $this->belongsTo(Incident::class);
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     **/
    public function funding()
    {
        return $this->belongsTo(FundingSource::class);
    }

    public function service()
    {
        return $this->belongsTo(Service::class, 'requested_service_id');
    }

    public function getServiceNameAttribute()
    {
        if ($this->service) {
            return $this->service->name;
        }
        return '';
    }
}
