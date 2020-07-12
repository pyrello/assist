<?php

namespace App\Traits;

use App\Note;

trait Noteable
{
    /**
     * Return a noteable_type attribute.
     *
     * @return string
     */
    public function getNoteableTypeAttribute()
    {
        return self::class;
    }

    /**
     * Note relations.
     *
     * @return \Illuminate\Database\Eloquent\Relations\MorphMany
     */
    public function notes()
    {
        return $this->morphMany(Note::class, 'noteable');
    }
}