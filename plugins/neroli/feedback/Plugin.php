<?php namespace neroli\Feedback;

use System\Classes\PluginBase;

class Plugin extends PluginBase
{
    public function registerComponents()
    {
        return [
            'Neroli\Feedback\Components\FeedbackForm' => 'feedbackform',
        ];
    }

    public function registerSettings()
    {
    }
}
