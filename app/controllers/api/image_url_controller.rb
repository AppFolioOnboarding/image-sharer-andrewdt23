require 'uri'

class Api::ImageUrlController < Api::BaseController

  def valid_url?(url)
    uri = URI.parse(url)
    uri.is_a?(URI::HTTP) && !uri.host.nil?
  rescue URI::InvalidURIError
    false
  end

  def index
    respond_with ImageUrl.order(created_at: :desc)
  end

  def create
    if is_valid_url?(imageUrl_params["url"]) && (['.jpeg', '.jpg', '.gif', '.png'].any? { |img| imageUrl_params["url"].include? img})
      respond_with :api, ImageUrl.create(imageUrl_params)
    else
      head :bad_request
    end
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
