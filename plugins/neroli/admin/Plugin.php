<?php namespace Neroli\Admin;

use System\Classes\PluginBase;

class Plugin extends PluginBase
{
    public function registerComponents()
    {
        return [
            'Neroli\Admin\Components\GalleryForm' => 'galleryform',
        ];
    }

    public function registerSettings()
    {
    }
}
