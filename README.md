# Repository for Cloud Computing DHBW 2022



## Cloud Provider:
https://portal.bw-cloud.org/project/networks/

### How to authenticate terraform with BW-Cloud
1)  Create Applikation Token in OpenStack with expiration date (!)
2)  Download clouds.yaml 
3)  Paste `clouds.yaml` in `~/.config/openstack/clouds.yaml`
4)  activate authentification via clouds.yaml export `OS_CLOUD=openstack`
