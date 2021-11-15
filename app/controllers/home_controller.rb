class HomeController < ApplicationController

  layout 'home'

  def index; end

  def principal_info
    render json: {
      'name' => 'WPCK',
      'description' => 'WPCK is a web application for managing the content of your WordPress website.',
      'version' => '1.0.0',
    }
  end

end
