require 'test_helper'

module Api
  class ImageUrlControllerTest < ActionDispatch::IntegrationTest
    def setup
      @url_controller = ImageUrlController.new()
    end

    test "valid_url should accept a valid url string" do
      assert_equal true, @url_controller.is_valid_url?('http://google.com/img.jpg')
      assert_equal true, @url_controller.is_valid_url?('http://google.com/img.jpeg')
      assert_equal true, @url_controller.is_valid_url?('http://google.com/img.png')
      assert_equal true, @url_controller.is_valid_url?('http://google.com/img.gif')
    end

    test "valid_url should deny an invalid url string" do
      assert_equal false, @url_controller.is_valid_url?('not valid')
      assert_equal false, @url_controller.is_valid_url?('http: // not valid . com')
    end

    test "index should return all image urls in descending order" do
      get api_image_url_index_path, xhr: true
      assert_response :success
      response = JSON.parse @response.body
      assert_equal 'http://testurl2.com', response[0]["url"]
      assert_equal 'http://testurl1.com', response[1]["url"]
    end

    test "create should only accept a valid image file" do
      post api_image_url_index_path, xhr: true, params: { imageUrl: { url: 'not valid' }}
      assert_response :bad_request

      post api_image_url_index_path, xhr: true, params: { imageUrl: { url: 'http://notavalidfile.com/img.mp4' }}
      assert_response :bad_request
    end

    test "create should only create a new imageUrl when given a valid url" do
      post api_image_url_index_path, xhr: true, params: { imageUrl: { url: 'http://google.com/img.jpg' }}
      assert_response :success
      response = JSON.parse @response.body
      assert_equal 'http://google.com/img.jpg', response["url"]
    end

    test "destroy should delete an imageUrl" do
      s = ImageUrl.new(id: 999, url: 'http://google.com/img.jpg')
      s.save


      delete api_image_url_path(id: 999), xhr: true
      assert_response :success
      puts @response.body.inspect
      assert_raises ActiveRecord::RecordNotFound do
        ImageUrl.find(999)
      end
    end

    test "update should correctly update a url" do
      s = ImageUrl.new(id: 999, url: 'http://google.com/img.jpg')
      s.save

      patch api_image_url_path(id: 999), xhr: true, params: { imageUrl: {url: 'http://new.com/img.jpg' }}
      assert_response :success
      response = JSON.parse @response.body
      assert_equal 'http://new.com/img.jpg', response["url"]
    end

  end
end
