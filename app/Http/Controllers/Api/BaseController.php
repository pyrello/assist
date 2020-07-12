<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Carbon\Carbon;
use Request;
use Response;

class BaseController extends Controller
{
    public function error($error, array $data = [], $status = 404) {
        $response = [
            'success' => false,
            'message' => $error,
        ];

        if (!empty($data)) {
            $response['data'] = $data;
        }

        return Response::json($response, $status);
    }

    public function success($data, $message = '', $status = 200) {
        return Response::json([
            'success' => true,
            'message' => $message,
            'data' => $data,
        ], $status);
    }

    public function get($model, Array $fields) {
        extract(Request::only('query', 'limit', 'page', 'orderBy', 'ascending', 'byColumn'));
        $data = $model->select($fields);
        if (isset($query) && $query) {
            $data = $byColumn==1?$this->filterByColumn($data, $query):
                $this->filter($data, $query, $fields);
        }
        $count = $data->count();
        $data->limit($limit)
            ->skip($limit * ($page-1));
        if (isset($orderBy) && $orderBy):
            $direction = $ascending==1?"ASC":"DESC";
            $data->orderBy($orderBy,$direction);
        endif;
        $results = $data->get()->toArray();
        return ['data'=>$results,
            'count'=>$count];
    }
    protected function filterByColumn($data, $query) {
        foreach ($query as $field=>$query):
            if (!$query) continue;
            if (is_string($query)) {
                $data->where($field,'LIKE',"%{$query}%");
            } else {
                $start = Carbon::createFromFormat('Y-m-d',$query['start'])->startOfDay();
                $end = Carbon::createFromFormat('Y-m-d',$query['end'])->endOfDay();
                $data->whereBetween($field,[$start, $end]);
            }
        endforeach;
        return $data;
    }
    protected function filter($data, $query, $fields) {
        foreach ($fields as $index=>$field):
            $method = $index?"orWhere":"where";
            $data->{$method}($field,'LIKE',"%{$query}%");
        endforeach;
        return $data;
    }
}
