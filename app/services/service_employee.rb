module ServiceEmployee
  class << self
    def create(params)
      employee_class = params[:worker] ? Worker : Manager
      type_employee = employee_class.create
      type_employee.employee.new(params)
    end
  end
end
