data "openstack_images_image_v2" "ubuntu" {
  name        = "Ubuntu 20.04"
  most_recent = true

  properties = {
    key = "value"
  }
}

# output "out" {
  # value = data.openstack_images_image_v2.ubuntu
# }


resource "openstack_compute_instance_v2" "helloworld" {
  name        = "hello.world"
  image_id    = data.openstack_images_image_v2.ubuntu.id 
  flavor_name = "m1.nano"
  key_pair    = "talpert"
  metadata    = { this = "if this work, that would be wonderful" }
}