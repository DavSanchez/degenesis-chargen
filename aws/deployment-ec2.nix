let
  region = "eu-west-1";
  accessKeyId = "default";

in
{ degenesis-chargen =
  { resources, ... }:
  { deployment.targetEnv = "ec2";
    deployment.ec2.accessKeyId = accessKeyId;
    deployment.ec2.region = region;
    deployment.ec2.instanceType = "t2.nano";
    deployment.ec2.keyPair = resources.ec2KeyPairs.degenesis-chargen-keys;
    deployment.ec2.securityGroups = [
      resources.ec2SecurityGroups."http"
      resources.ec2SecurityGroups."ssh"
    ];
    # deployment.ec2.ebsInitialRootDiskSize = 7;
  };

  resources.ec2KeyPairs.degenesis-chargen-keys =
    { inherit region accessKeyId; };

  resources.ec2SecurityGroups = {
    "http" = {
      inherit accessKeyId region;

      rules = [
        { fromPort = 80; toPort = 80; sourceIp = "0.0.0.0/0"; }
      ];
    };

    "ssh" = {
      inherit accessKeyId region;

      rules = [
        { fromPort = 22; toPort = 22; sourceIp = "0.0.0.0/0"; }
      ];
    };
  };
}