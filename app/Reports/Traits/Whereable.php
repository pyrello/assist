<?php

namespace App\Reports\Traits;

use App\Reports\Where;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Query\Builder;

trait Whereable
{
    /**
     * @return mixed
     */
    public function wheres()
    {
        return $this->morphMany(Where::class, 'whereable');
    }

    /**
     * Load wheres if not loaded, then loop through them and
     * add them to the provided query.
     *
     * @param Builder $query
     * @return Model
     */
    public function addWheresToQuery(Builder $query)
    {
        info(static::class . ' Whereable::addWheresToQuery()');
        if (!$this->relationLoaded('wheres')) {
            $this->load('wheres');
        }

        /** @var Where $where */
        foreach ($this->wheres as $where) {
            $where->addWhereToQuery($query);
        }

        return $this;
    }

    public function createAndAttachWheres(array $wheres = [])
    {
        foreach ($wheres as $schema) {
            $joins = null;

            if (isset($schema['joins'])) {
                $joins = $schema['joins'];
                unset($schema['joins']);
            }

            $where = new Where($schema);

            $this->wheres()->save($where);

            if (!is_null($joins)) {
                $where->createAndAttachJoins($joins);
            }
        }
    }
}
