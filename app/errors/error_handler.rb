module ErrorHandler
  def self.included(main_class)
    main_class.class_eval do
      rescue_from StandardError do |exception|
        _respond_with :internal_server_error, I18n.t('errors.generic.unexpected_error')
      end if Rails.env.production?

      rescue_from ActiveRecord::RecordNotFound do |exception|
        _respond_with :not_found, exception
      end
    end
  end

  private

  def _respond_with(_status, _message)
    render json: { errors: [_message] }, status: _status
  end
end
