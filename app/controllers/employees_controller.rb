class EmployeesController < ApplicationController
  before_action :set_employee, except: [:index]

  def index
    render json: Employee.all
  end

  def show
  end

  def create
  end

  def update
  end

  def detele
  end

  private

  def set_employee
    @employee = Employee.find(params[:id])
  end
end
