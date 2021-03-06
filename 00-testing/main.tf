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


  provisioner "remote-exec" {
    # define SSH connection for provisioner
    connection {
      type = "ssh"
      host = self.access_ip_v4
      user = "ubuntu"
      # private_key = file("~/.ssh/id_rsa")
    }    
    inline = [
      "sudo apt update",
      "sudo apt install docker.io -y ",
      "sudo apt install docker -y ",
      "sudo apt install docker-compose -y ",
      "sudo usermod -aG docker $USER"      
    ]
  }
}



resource "null_resource" "softwareconfig" {
  connection {
    type = "ssh"
    host = openstack_compute_instance_v2.helloworld.access_ip_v4
    user = "ubuntu"
    port = 22
  }

   provisioner "file" {
   source      = "./tinyNodejsApp"
   destination = "/home/ubuntu/tinyNodejsApp"
   }

   provisioner "remote-exec" {
   inline = [
      "cd /home/ubuntu/tinyNodejsApp",
      "docker build -t local/tinynodejsapp:latest .",
      "docker-compose up -d"      
    ]
   }

}


output "NewIP" {
value = openstack_compute_instance_v2.helloworld.access_ip_v4
}
