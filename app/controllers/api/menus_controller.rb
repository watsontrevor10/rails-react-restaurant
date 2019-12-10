class Api::MenusController < ApplicationController

  def index
    render json: Menu.all
  end

  def create
    menu = Menu.new(menu_params)
    if menu.save
      render json: menu 
    else 
      render json: {err: item.err }, status: :unprocessable_entity
    end
  end

  def update
    menu = Menu.find(params[:id])
    menu.update(complete: !menu.complete)
    render json: item
  end

  def destroy
    Menu.find(params[:id]).destroy 
    render json: { message: 'Item deleted' }
  end

  private 

  def menu_params
    params.require(:menu).permit(:name, )
  end
end
