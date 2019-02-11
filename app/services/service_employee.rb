module ServiceEmployee
  class << self
    def create(params)
      employable_class = params[:employable_type].capitalize.constantize
      employable_type = employable_class.create
      my_params = params.to_h.except(:employable_type)
      employable_type.create_employee(my_params)
    end
  end
end
