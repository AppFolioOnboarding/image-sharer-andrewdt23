class Api::ImageUrlController < Api::BaseController

  def index
    respond_with ImageUrl.order(created_at: :desc)
  end

  def create
    respond_with :api, ImageUrl.create(imageUrl_params)
  end

  def destroy
    respond_with ImageUrl.destroy(params[:id])
  end

  def update
    imageUrl = ImageUrl.find(params["id"])
    imageUrl.update_attributes(imageUrl_params)
    respond_with imageUrl, json: imageUrl
  end

  private

  def imageUrl_params
    params.require(:imageUrl).permit(:url)
  end

end
