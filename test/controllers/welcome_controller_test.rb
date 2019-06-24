require 'test_helper'

class WelcomeControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get welcome_index_url
    assert_response :success
  end

  test "index should return all image urls in descending order" do
    get api_image_url_path
    assert_response :success
    assert_equal 'test', @response.body
  end

end
