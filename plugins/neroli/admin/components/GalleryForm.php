<?php namespace Neroli\Admin\Components;

use CMS\Classes\ComponentBase;
use Neroli\Admin\Models\CatEvent;

class GalleryForm extends ComponentBase 
{
    public $gallery;

    public function componentDetails()
    {
        return [
            'name' => 'Gallery Form',
            'description' => 'Gallery Form',
        ];
    }

    public function onRun()
    {
        $unhandleCat = CatEvent::all(); 
        foreach($unhandleCat as $cat) {
            foreach($cat->events as $event) {
                $temp = date_create_from_format('Y-m-d', $event->date);
                $event->date = date_format($temp, 'd.m.Y');
            }
        }
        $this->gallery = $this->page['gallery'] = $unhandleCat;
    }


}