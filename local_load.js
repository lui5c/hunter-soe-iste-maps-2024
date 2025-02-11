const indicatorsCSV=`class code,1a,1b,1c,2a,2b,2c,3a,3b,3c,3d,4a,4b,4c,4d,5a,5b,5c,6a,6b,6c,6d,7a,7b,7c
CEDF70900, , ,i, ,i, , ,m, ,m, , ,u,i, , , ,m,m, , , , ,m
ECF70000, , ,i, ,i, , ,m, ,m, , ,u,i, , , ,m,m, , , , ,m
ECF20000/70000, ,im,m,mu,imu, ,imua,imua,mu,m,iu,mu,mu,imua,m, , ,u,imua,m,imu, ,m, 
ECF20100/70100, ,im,m,mu,imu, ,imua,imua,mu,m,iu,mu,mu,imua,m, , ,u,imua,m,imu, ,m, 
CEDF70600, ,im,m,mu,imu, ,imua,imua,mu,m,iu,mu,mu,imua,m, , ,u,imua,m,imu, ,m, 
QSTB40380, ,im,m,mu,imu, ,imua,imua,mu,m,iu,mu,mu,imua,m, , ,u,imua,m,imu, ,m, 
SEDF20300/70300, ,im,m,mu,imu, ,imua,imua,mu,m,iu,mu,mu,imua,m, , ,u,imua,m,imu, ,m, 
SEDF72000,m,i,u,i,i,i,m,m,m,i,u,i,i,i,u,u,i,i,i,i,m,i, ,i
ECF70200, , ,u, ,m,u,ua, ,m,m, ,u, ,m,u,u,u, , ,u, , ,ua,ua
CEDF71600,ua, ,u,m,m,m,ua, , ,m, , , , ,u, , , , ,ua, ,ua,ua,ua
CHND71200,im,iu,iu,i,i,imua,i,imu,i,imu,imua,imua,i,i,imua,imua,imua,imu,imua,i,imu,i,imua,imua
CHND71300,imu,im,i,i,i,i, ,i,i,i,imu,i,iu, ,imua,i,i,i,i, ,iu,i,iua,imu
LATED71200,im,im,im,im,im,im,im,im,im,im,im,im,im,im,im,im,im,im,im,im,im,im,im,im
LATED71300,im,im,im,im,im,im,im,im,im,im,im,im,im,im,im,im,im,im,im,im,im,im,im,im
SEDC32300/72300,u,m,u,m,u,m,m,u,m,m,u,m,m,m,m,m,m,u,m,m,u,u,u,m
SEDC30700/70700,u,m,m,m,u,u,ua,ua,m,i,u,m,u,u,u,m,u,ua,u,u,u,u,u,ua
SEDC21300/71300,ua, ,m,ua,ua,i, ,u, , ,u,u, , ,u,ua,u,ua,ua,ua, , ,u,u
SEDC71900,iu, , ,iu, ,iu, , , , ,iu,iu, , ,iu,iu, , ,iu, , , ,iu, 
CHND73100,imua,imua,i,i,i,imu,i,imu,i,iu,i,iua,i,i,i,i,i,imua,i, ,imua,i,im,imu
CHND74110,imua,imua,i,i,i,imu,i,imu,i,iu,i,iua,i,i,i,i,i,imua,i, ,imua,i,im,imu
LATED73100,im,im,im,im,im,im,im,im,im,im,im,im,im,im,im,im,im,im,im,im,im,im,im,im
LATED74100,im,im,im,im,im,im,im,im,im,im,im,im,im,im,im,im,im,im,im,im,im,im,im,im
SEDC45201/75201,im,im,u,im,imu,imu,im,imua,imua, ,imua,imua,imua,imua,imua,imua,imua,imua,imua,imua,imua,imua,imua,imua
SEDC45202/75202,im,im,u,im,imu,imu,im,imua,imua, ,imua,imua,imua,imua,imua,imua,imua,imua,imua,imua,imua,imua,imua,imua
SEDC45203/75203,im,im,u,im,imu,imu,im,imua,imua, ,imua,imua,imua,imua,imua,imua,imua,imua,imua,imua,imua,imua,imua,imua
SEDC45300/75300,iua,iua,iua,u, , , , ,i,imu,ua, , ,imu,u,imu, ,iua,iua,iua,u,i,iua,iua
SEDC75900,iua,iu, ,iu,iu,iu, ,iua, , ,iu,iu, , ,iu,iua,iua,iua,u,iua, , ,iu, 
SEDC76000,iua,iu, ,iu,iu,iu, ,iua, , ,iu,iu, , ,iu,iua,iua,iua,u,iua, , ,iu, 
SEDC77211,im,im,u,im,imu,imu,im,imua,imua, ,imua,imua,imua,imua,imua,imua,imua,imua,imua,imua,imua,imua,imua,imua
SEDC77212,im,im,u,im,imu,imu,im,imua,imua, ,imua,imua,imua,imua,imua,imua,imua,imua,imua,imua,imua,imua,imua,imua
SEDC77213,im,im,u,im,imu,imu,im,imua,imua, ,imua,imua,imua,imua,imua,imua,imua,imua,imua,imua,imua,imua,imua,imua
CEDC70100,u, ,imua, ,i, ,i,iu, , , ,mu,u,imua,u,u, ,imua,im, ,imua,i, ,imua
CEDC70200,u,i,imua, ,i,imu,i,imu, , ,iu,iu,u,imua,imu,imu,imu,imua,im, ,imua,imu,imua,imua
CEDC70300/QSTA41480,imua,imu,imu, ,imu,imu,imua,imua,imua,im,ua,imua,imua,i,imua,imua,ua,imua,imua,ua,imu,imu,ua, 
CEDC776,imua,imu,imu, ,imu, ,imua,imua,i,i,i,imua,imua,i,i,i,imu,imua,imua,ua,imu,imu,ua, 
CEDC70450,u, ,imua, ,i, ,i,iu, , , ,mu,u,imua,u,u, ,imua,im, ,imua,i, ,imua
CEDC70500,imu,imu,im, ,i, ,i, ,i,i, ,imua,imua,i,i,i,imu,imu,im,im,imu,imu,imu, 
CEDC70600/QSTA41280,iua,imu,im, ,i, ,imu,imu,i,i, ,imu,imu,u,u,iua, ,imu,im, ,iua,ua,ua,u
QSTA40180,i, ,imua, ,i, ,i,iu, , , ,i,u,imua,i,u, ,imua,im, ,imua,i, ,imua
QSTA41080,u,i,imua, ,i,imu,i,imu, , ,iu,iu,u,imua,imu,imu,imu,imua,im, ,imua,imu,imua,imua
CEDC72400/QSTAP41580,imu, ,im, ,imu,m,i,i,im,imu, ,imu, ,imua,imu,imu,imu,imu, ,imua,imua,imu,imua,imu
Notes, , , , , , , , , , , , , , , , , , , , , , , , 
ECC70300,ia,m,imu, ,i,mu,mu,i, , ,m,mu,m,imu,im,im,m,ia, , ,ia,i,im,ia
ECC71500,imua,u,u,mu,ia,ua,mu,ia,m, ,ua,ua,ua,ua,imu,ia,ua,u,u,u,ia,i,ia,ia
ECC72000,ia, ,imu, , ,i, ,imua,imua, ,i, , ,im,im,im,im,imu,u, ,imu,imu,imu,imu
ECDD705,m, ,i, ,i, ,m,m, , , ,i, , ,ua,m, ,m,m, ,u,i,u, 
ECC706,u,u,u, , ,mu, ,u,m,u, , ,m,ua,u,m, ,u, , ,u, , , 
ECC70400, ,iua,ua,m,u, , ,ua, , , , , , ,m,m, ,u, , ,u, , , 
ECC70800, , , , , , , , , , , , , , , , , , , , , , , , 
ECC70900,i,i,m,m, , ,u, , , , ,u, ,m,m,m,m,u, ,u,u, , , 
ECC71000,i, ,i, ,i, ,m,m, , , ,i, , ,ua,m, ,m,m, ,u,i,u, 
ECC71100, ,ia,imua, ,ia,mua,ua,u, ,m, , ,m,m,mu,m,mu,u, ,u,u,u,u, 
ECC714,im,m,mu,ia,i,i,i,i, , ,u,m,m,i,u,u,mua, , , , , , , 
ECC71200, , ,mu, ,mu,u, , ,mu,mu, ,u, , , , , ,mu, ,u,mu, , , 
ECC71600,ua,m,m,ua, ,i,m,i, ,ua,u,m,u,ua,ua,ua,ua,ua,u,ua,u,u,u,ua
ECC71800,ua,m,m,ua, ,i,m,i, ,ua,u,m,u,ua,ua,ua,ua,ua,u, , , , , 
ECC30100, , , , , , , , , , ,m, , ,i,i, , , , , ,i, , , 
ECC30400, , , , ,i,i,u, , , ,u, , ,m, , , ,u, , ,u,u, , 
ECC30500, , ,i, ,i,i,i,i, , , ,i, ,i,i,i,i,u, , ,ua, , , 
ECC30200,imu, ,imu, ,imu, ,imu, , , , , , ,imu,imu,imu,imu,imu, , ,imu,imu,imu,imu
ECC30600, , ,i, ,i, ,i,i, , , , , ,i,i,m, ,u, , ,i, , , 
ECC30800, , ,i, ,i, ,i,i, , , , , ,i,m,m, ,i, , ,i,i, , 
ECC30300, , ,i, ,i, ,i,u, , , ,i, ,i,u,u,u,u,u,u,u,u,u,u
ECC31000, , ,i, ,i, ,i,u, , , ,i, ,i,u,u,u,u,u,u,u,u,u,u
ECC31400,m,m,mu,ia,i,i,i,i, , ,u,m,m,i,u,u,u,u, , ,i,i, , 
ECC40100,ua,m,m,ua, ,i,m,i, ,ua,u,m,u,ua,ua,ua,ua,ua,u,ua,u,u,u,ua
SPEDE76850, , ,im, ,i, ,imu,u,i, , , , ,m,m, , ,mu, , , , ,m, 
SPEDE76900, , ,m,m, , , ,i,m,u,i, , , ,i, , , , , , ,u,u,u
SPEDE77000, ,i,u, ,i, , , , ,u, , , ,u, , , ,i, , , ,u, ,ua
SPEDE77100,m,i,m, ,i,m,m,ua,m,u,ua,m,u,u,u,m,u,i, , ,u,ua,m,m
SPEDE77200,imu,mu,im,imua,imua,imua,imua,imua,imua,imua,mu,im,imua,imu,imua,imu,mua,imu,ua,imu,imua,imua,imua,imua
SPEDE77310, , ,i, ,i, , , ,i,imu, , , ,imu, , , , , , , , ,m, 
SPEDE77320, , ,i, ,i, , , ,i,imu, , , ,imu, , , , , , , , ,m, 
SPEDE77400,i, ,i, ,i,i,u,i,i,imu,u, , ,imu,imu,imu, , , ,i, , ,imu, 
SPEDE77600,i, ,mu,u,i,i,imu,iu,i,iu,u,iu, ,i,iu,iu, , , , ,i, ,imu, 
SPEDE77800,i, ,mu,u,i,i,imu,iu,i,iu,u,iu, ,i,iu,iu, , , , ,i, ,imu, 
SPEDE77810,i, ,mu,u,i,i,imu,iu,i,iu,u,iu, ,i,iu,iu, , , , ,i, ,imu, 
SPEDE77820,i, ,mu,u,i,i,imu,iu,i,iu,u,iu, ,i,iu,iu, , , , ,i, ,imu, 
SPEDE77900,i, ,mu,u,i,i,imu,iu,i,iu,u,iu, ,i,iu,iu, , , , ,i, ,imu, 
SPEDE77910,i, ,mu,u,i,i,imu,iu,i,iu,u,iu, ,i,iu,iu, , , , ,i, ,imu, 
SPEDE77920,i, ,mu,u,i,i,imu,iu,i,iu,u,iu, ,i,iu,iu, , , , ,i, ,imu, 
SPEDE77951,i, ,mu,u,i,i,imu,iu,i,iu,u,iu, ,i,iu,iu, , , , ,i, ,imu, 
SPEDE79550,i, ,mu,u,i,i,imu,iu,i,iu,u,iu, ,i,iu,iu, , , , ,i, ,imu, 
SPEDE79552,i, ,mu,u,i,i,imu,iu,i,iu,u,iu, ,i,iu,iu, , , , ,i, ,imu, 
DANED76000,imu,mu,im, ,u,im,u,imu,im, ,imu,imu,i,u,m,imu,u,i,imu,ua,ua,u,imu, 
DANED76200,im,im,im, ,im, ,imu,imu, ,imu,imu, , ,imu,imua,imua, ,im,im,imua,imua, ,imu,imu
DANED76400,u,ua,ua, , , , , , , , , , , , , , , , , , , , , 
DANED766,m,im,im,im,im, ,im,i, , ,imu,iu, ,imu,ua,ua,ua,ua, ,ua,ua,im,im,ua
DANED76602,u,ua,ua, , , , , , , , , , , , , , , , , , , , , 
DANED76605,u,ua,ua, , , , , , , , , , , , , , , , , , , , , 
SEDCP45600,u,ua,ua, , , , , , , , , , , , , , , , , , , , , 
MUSED67700, ,i,iu, ,i,i,i,iu,iu, , , , , , , , ,i, ,i,i, , , 
MUSED67800,i,i,i,i,i,i,i,i,i, , , , , ,i,i,i,i,i,i,i, , , 
ARTED71000,imua,i,imua,imua,imu,im,imu,imua,im,imu,i,im,imu,imu,im,imua,imu,iu,imua,imua,imua,i,imua,i
ARTED71100,imua,imu,imua,i,imua,imu,i,imu, ,im,imu,imu,i,imua,imu,imua,imua,imu,i,imua,imua,imua,imua,imu
ARTED71200,u,imu,imu,imu,imua,imua,imu,imua,i,i,i,imu,i,imu,imua,imua,imua,imu,imu,imua,imua,imu,imu,imu
EDESL77500,iu,im,iua,u,i,i,ia,ia, , ,ia,iu,im,imu,iu,imu,imu,im,imu, ,imua,imu, , 
EDESL791, ,im,imua, , , ,imua,imua,imua,imua, ,imua,imua, ,i,imua,imua,imua,imua,imua,imua,u,ia,imua
EDESL79200,ua,m,ua,ua,ua,ua,m,u,m,i,ua,ua,ua,ua,u,ua,ua,u,ua,m,m,u,u,u
EDESL78300,m, ,mua, ,i,i,mu,i, , ,m,m, ,i, ,m, ,mua, , ,mu,ua,u, 
EDESL75200,imua,i,imua,imua,imua,imua,imua,imua,imua,imua,imua,imua, ,imua,imua,imua,imua,imua, ,imua,imua,imua,imu, 
EDESL75300,imua,i,imua,imua,imua,imua,imua,imua,imua,imua,imua,imua, ,imua,imua,imua,imua,imua, ,imua,imua,imua,imu, 
BILED70100,imu,imua,imua,i,im,imua,imua,imua,i,im,imu,imu,imu,im,imua,imua,imua,iu,imu, ,imua, ,imu,imu
BILED77900,mu, , , ,ua,m,mu,m, , ,m,m, ,mu,m,m, ,u,m, ,u, , , 
BILED78000,imu,imu,imu,im,imu, , ,imu,imua,u,imua,imua,iu, ,i,imua,imu,imu,im,imua,imua,imu,i,im
BILED71100,iua,im,im, ,imu,iua,imu,imu, ,imu,iua, ,imu,imu, ,i, ,mu,ua, ,imua,iua, , 
BILED71200,iua,im,im, ,imu,iua,imu,imu, ,imu,iua, ,imu,imu, ,i, ,mu,ua, ,imua,iua, , 
BILED71300,iua,im,im, ,imu,iua,imu,imu, ,imu,iua, ,imu,imu, ,i, ,mu,ua, ,imua,iua, , 
BILED76800,m, ,m,m,m,m,u,m, , ,mu,u,u,m,imu,m,m,m,m, ,m, ,m, 
BILED76900,m, ,m,m,m,m,u,m, , ,mu,u,u,m,imu,m,m,m,m, ,m, ,m, 
BILED77800,m, ,m,m,m,m,u,m, , ,mu,u,u,m,imu,m,m,m,m, ,m, ,m, 
BILED78200,iua,imu,i, ,i,i,mu,mu, ,imu,i,i,u,mu, ,mu,imu,mu, ,imu,imu,iua,iua,mu
BILED78300,iua,imu,i, ,i,i,mu,mu, ,imu,i,i,u,mu, ,mu,imu,mu, ,imu,imu,iua,iua,mu
BILED78900,iua,imu,i, ,i,i,mu,mu, ,imu,i,i,u,mu, ,mu,imu,mu, ,imu,imu,iua,iua,mu
BILED79000,iua,imu,i, ,i,i,mu,mu, ,imu,i,i,u,mu, ,mu,imu,mu, ,imu,imu,iua,iua,mu
EDLIT73400, , , ,ua, , ,ua,ua, , , ,ua, , ,ua,ua,m,ua, , ,ua, , , 
EDLIT75400, , , ,ua, , ,ua,ua, , , ,ua, , ,ua,ua,m,ua, , ,ua, , , 
EDLIT73600, , , , ,ua, , ,ua, , , , , ,ua,ua,ua, ,ua, ,ua,ua,ua, ,ua
EDLIT73700, , , , ,ua, , ,ua, , , , , ,ua,ua,ua, ,ua, ,ua,ua,ua, ,ua
EDLIT73100,imu, ,i, ,i, ,u,m, ,u,u, , ,ua,u,ua,ua,ua,u, ,ua,ua, ,ua
EDLIT7300,u,i, , ,i, ,u,i, , ,u,u, , ,u,ua,ua,ua,u,u,u,u, , 
EDLIT75300,u,i, , ,i, ,u,i, , ,u,u, , ,u,ua,ua,ua,u,u,u,u, , 
EDLIT75600,imu, ,i, ,i, ,u,m, ,u,u, , ,ua,u,ua,ua,ua,u, ,ua,ua, ,ua
ECC704, ,iua,ua,m,u, , ,ua, , , , , , ,m,m, ,u, , ,u, , , 
EDLIT73000,mua, ,imua, ,mua,mua,mua,mua,mua,ua,mua,ua,ua,mua,mua,mua,mua,mua, ,mua, ,imua,mua,im
EDLIT73200, , ,ua, , , ,ua,i, , ,ua,ua,ua, ,ua,ua, ,ua,ua, ,ua, , ,ua
EDLIT73500,imua,imu,imua,imua,imua,imu,imua,imua,imua,imua,imua,imua,imua,imua,imua,imua,imua,imua,imua,imua,imua,imua,imua,imua
EDLIT73900, ,mu,mu, , , ,mu,mu,mu, ,u, ,u,mu,mu,mu,mu,u,mu, ,mu,m,mu,m
EDLIT74000,imua,iua,imua,i,im,iu,m,imu,imu,imua,im,imu,i,imua,im,imua,im,imua,im, ,imua,i,imu, 
EDLIT74500,iu,iu,imua,imu,iua, ,iua,imua,i,imu, , , ,imua,iu,iu,imu,u, , ,imua,imua,imua,imu
EDLIT75500,u,u,ua,u,u,u,ua,ua, , ,ua,u,u,ua,u,u,u,ua,u, ,ua,u,u,ua
SEDC711,im,u,ua,i,i,i,ua,i, , ,u,u,u,im,im,u,im,ua,u, ,ua,im,im,ua
EDLIT74200, ,imu,ua, , , , , , , ,ua, , ,ua, ,m, ,ua,imu, ,ua, ,m,ua
EDLIT75200, ,imu,ua, , , , , , , ,ua, , ,ua, ,m, ,ua,imu, ,ua, ,m,ua
EDLIT75700, , , , ,ua, , ,ua, , , , , ,ua,ua,ua, ,ua, ,ua,ua,ua, ,ua
SPED30800/70800,m,ua,mu,mu,u,m,u,mua,imu,u,mua,m,iu,iu,mu,m,iu,mua,m,m,m,m,m,iu
SPED70100,i, ,u, ,i,m, , ,i, , , , ,u,u, , ,i, , , , , ,ua
SPED70200,imu,imu,imu,imu,imu,imu,imu,imu, ,imu,imua,imu,imu,imu,imu,imu,imu,imu,imu,iua,iua,ua,ua,imua
SPED70300,m,ua,mu,mu,u,m,u,u,iu,iu,u,mua,imu,u,mua,m,m,mua,m, ,m,m,m,iu
SPED70550,imu,i,im,imua,imua,imua,imua,mua,mua,mua,imua,imua,m, ,imua,mua,imua,m, ,mu,mua,im,mua,mu
SPED70600, ,i,ua,im,mua,ua,ua,ua,mu,mu,mu,m,u,i,mua,mua,mua,mua,mua,i,i, ,i,mu
SPED70650,i,imu,imua,imua,imua,imua,imua,ua,m,m,i,iu,iu,imua,imua,imua,imua,imua,imu,imua,imua,imua,im,im
SPED70700,imua,imua,imua,imua,imua,imua,imu,imu,imua,imua,imu,imua,imu,imua,imu,imu,imu,imua,imua,iua,imu,iu,imu,imu
SPED74600, , , ,i,m,i,iu,m,mu,mu, ,m, , , , , , ,i,m, , ,mu,imu
SPED79000, , ,i,iu,iu,m,iu,m,mu,mu, ,m, , , , , , ,i,m, , ,mu,imu
SPED79100, , , ,ua,u, ,iu,m,mu,mu, , , , , , , , ,i,m, , ,mu,imua
SPED79200, , , ,i,i, ,i,m,mu,mu, , , , , , , , ,i,m, , ,i,imu
SPED79300, , , ,i, , ,i,m,mu,mu, , , , , , , , ,i,m, , ,m,mu
SPED79500, , , ,iu,i, ,i,m,mu,mu, , , , , , , , ,i,m, , ,ua,imu
SPED71451,imua,imu,imu,im,imu,m,i,imu,mu,mu, , , , , , , , ,i, , , , , 
SPED74500,i,im,im,i,im,im,i,i,m,m, , , , , , , , , , , , , , 
SPED74700,i,im,im,i,im,i, , ,mu,mu, , , , , , , , , , , , , , 
SPED74854,imua,imu,imu,im,imu,m,i,imu,mu,mu, , , , , , , , , , , , , , 
SPED74855,imua,imu,imu,im,imu,m,i,imu,mu,mu, , , , , , , , , , , , , , 
SPED74857,imua,imu,imu,im,imu,m,i,imu,mu,mu, , , , , , , , , , , , , , 
SPED72000, , , ,i,i,i, , , , , , , , , , , , , , , , , , 
SPED72100, , , ,i,i,i, , , , , , , , , , , , , , , , , , 
SPED72700, , , ,i,i,m, , , , , , , , , , , , , , , , , , 
SPED73000, , , , , , , , , , , , , , , , , , , , , , , , 
SPED73100, , , , , , , , , , , , , , , , , , , , , , , , 
SPED73300, , , , , , , , , , , , , , , , , , , , , , , , 
SPED72350,iua,iu,iua,imua,imua,imua,imua,imua,i,im,imua,iua,imua,imua,imua,imua,imua,imua,imua,imua,imua,im,imua,imua
SPED72400,imua,i,imua,imu,imu,im,imua,im,im,imua,imua,imua, ,imua,imu,imua,imu,imu, ,im,imua,im,i,imua
SPED724,ua,i,m, ,imu,mu,imua,imua,im,imua,imu,mua, ,imua,imu,imua,mua,imua,imu,imu,imua,imua,imua,imua
SPED77100, , ,m,m,i, , ,imu,imu, ,imu, , , ,mu,imu,imu, , , ,imu, ,m,imu
SPED77300, , ,m,m, , , , , , ,imu, , ,mu,mu, , ,imu, ,imu, , , , 
SPED77600, , ,m,m, ,imu,i, , , ,imu, , ,mu,mu, , ,imu, , ,iu, ,m,imu
SPED78000, , ,m,m,i, , , , , , , , ,im,mu, , ,imu, , , , , ,imu
SPED781,im, ,imu,im,i,imu,imua,imua,im,im,imua,imua,imu,imu,imua,imu,imu,imua,imu,imu,imu,imu,i,imua
SPED781.5,im, ,imu,im,i,imu,imua,imua,im,im,imua,imua,imu,imu,imua,imu,imu,imua,imu,imu,imu,imu,i,imua
SPED78100, , ,i,i,i,i,imu,imu,u,ua, ,mu,mu,mu,mu,mu,m,mu,m, ,mu, ,m,m
SPED75000, , ,ua, , , ,u, ,i,i, , , ,ua,u, , , , , , ,ua, , 
SPED75100,imua,iua,imua, , ,imua, , , ,iua, , , ,i, , , , , , , ,imua,imua,imua
SPED752,im,im,im,imu,imu,imu,im,im,im,im,im,im,im,im,im,im,im,imu,imu,iu,iu,i,i,i
SPED75255,imua,imua,imua,imua,imua,imua,imua,imua,imu,im,imua,iu,imua,imua,iu,imu,imua,im,imu,imu,imu,imu,imu,imu
SPED77500,imu,imu,imu, ,imu, , ,mu,mu,mu, , ,mu,mu,imu, , , ,i, ,i, ,imu,imu
SPED77550,imu,imu,imu, ,imu, , ,mu,mu,mu, , ,mu,mu,imu, , , ,i, ,i, ,imu,imu
SPED77200,mua,mua,mua,m,i,mua,mua,mua,imua,iu,u,imua, ,imua,imua,imua,imua,iu,mua,im,im,iu,imua,imua
SPED77400,mua,mua,mua,m,i,mua,mua,mua,imua,iu,u,imua, ,imua,imua,imua,imua,iu,mua,im,im,iu,imua,imua
SPED77700,mua,mua,mua,m,i,mua,mua,mua,imua,iu,u,imua, ,imua,imua,imua,imua,iu,mua,im,im,iu,imua,imua
SPED78200,imua, ,im,imu, ,imu,imu,imu,imu,imu,imua,imua, ,imu,imu,imu,imu,imua,imu, ,imu, , ,imua
SPED75500, ,i,i, , , ,mu, , , , , ,imu,imu,iua, , ,mu, ,mu, , ,mu, 
SPED75600, ,i,i, , , ,mu, ,mu, , , ,imu,imu,iua, , ,mu, ,mu, , , , 
SPED75300, ,i,i, , , ,mu, , , , , ,imu,imu,iua, , ,mu, ,mu, , , , 
SPED75400, ,i,i, , , , , , , , , ,imu,imu,iua, , ,mu,mu,mu, , ,mu,mu
SPED786, , , , ,i,m, , , , ,u,u, , ,u, ,m,i, , ,i,u, , 
SPED78652,u,u,u, ,u,u, ,u, ,m,u, , , ,u,u,u,m,u,u,mu, ,u, 
SPED78651,mu,m, ,mu,mu,mu,mu,mu, , ,mu,mu,m,mu,mu,mu,mu,mu,m, ,mu,mu,mu, 
SPED78900, , , , , , , , , , , , , , , , , , , , , , , , 

`

const sequencesCSV = `sequence name,link,sequence
Adolescent Biology (Advanced Certificate),https://education.hunter.cuny.edu/academics/graduate-programs/adolescent-biology-advanced-certificate/adolescent-biology-advanced-certificate-course-sequence-and-program-tracker-full-time-fall-start/,"SEDF 70300, SEDF 70400, SEDC 71000, SEDF 70500, SEDC 71300, SPED 70800, SEDF 70600, SEDC 72400, SEDC 74100, SEDC 72000, SEDC 75401"
Adolescent Biology (MA),https://education.hunter.cuny.edu/academics/graduate-programs/adolescent-biology-ma/graduate-adolescent-biology-ma-course-sequence-and-program-tracker-fall-start/,"SEDF 70300, SEDF 70400, SEDC 71000, SEDF 70500, SEDC 71300, SPED 70800, SEDF 70600, SEDC 72400, SEDC 74100, SEDC 72000, SEDC 75401"
Adolescent Chemistry (Advanced Certificate),https://education.hunter.cuny.edu/academics/graduate-programs/adolescent-chemistry-advanced-certificate/graduate-adolescent-chemistry-advanced-certificate-course-sequence-and-program-tracker-fall-start/,"SEDF 70300, SEDF 70400, SEDC 71000, SEDF 70500, SEDC 71300, SPED 70800, SEDF 70600, SEDC 72400, SEDC 74100, SEDC 72000, SEDC 75402"
Adolescent Chemistry (MA),https://education.hunter.cuny.edu/academics/graduate-programs/adolescent-chemistry-ma/adolescent-chemistry-ma-course-sequence-and-program-tracker-full-time-fall-start/,"SEDF 70300, SEDF 70400, SEDF 70500, SEDC 71000, SEDC 71300, SPED 70800, SEDC 72400, SEDC 74100, SEDF 70600, SEDC 72000, SEDC 75402"
Adolescent Chinese (MA),https://education.hunter.cuny.edu/academics/graduate-programs/adolescent-chinese-ma/adolescent-chinese-ma-full-time-fall-start-course-sequence-and-program-tracker/,"SEDF 70300, SEDF 70400, SEDC 71000, SEDF 70500, CHND 71200, SPED 70800, SEDF 70600, CHND 71300, SEDC 72000, CHND 73100"
Adolescent Earth Science (Advanced Certificate),https://education.hunter.cuny.edu/academics/graduate-programs/adolescent-earth-science-advanced-certificate/graduate-adolescent-earth-science-advanced-certificate-4-semester-course-sequence-and-program-tracker-fall-start/,"SEDF 70300, SEDF 70400, SEDC 71000, SEDF 70500, SEDC 71300, SPED 70800, SEDF 70600, SEDC 72400, SEDC 74100, SEDC 72000, SEDC 75404"
Adolescent Earth Science (MA),https://education.hunter.cuny.edu/academics/graduate-programs/adolescent-earth-science-ma/graduate-adolescent-earth-science-ma-full-time-course-sequence-and-program-tracker-fall-start/,"SEDF 70300, SEDF 70400, SEDC 71000, SEDF 70500, SEDC 71300, SPED 70800, SEDF 70600, SEDC 72400, SEDC 74100, SEDC 72000, SEDC 75404"
Adolescent English (Advanced Certificate),https://education.hunter.cuny.edu/academics/graduate-programs/adolescent-english-advanced-certificate/program-sequence-for-fall-24-admits-adolescent-english-advanced-certificate/,"SEDF 70300, SEDF 70400, SEDC 71100, SEDC 70700, SEDC 70800, EDUC 71500, SEDC 72000, SEDC 72100, SEDC 70900, SPED 70800, SEDF 72000, SEDC 75100, SEDC 77150"
Adolescent English (MA),https://education.hunter.cuny.edu/academics/graduate-programs/adolescent-english-ma/program-sequence-for-fall-24-admits-adolescent-english-ma/,"SEDF 70300, SEDF 70400, SEDC 71100, SEDC 72000, SEDC 70700, SEDC 70800, SEDC 72100, SEDC 70900, SPED 70800, SEDF 72000, SEDC 75100, SEDC 77150"
Adolescent French (Advanced Certificate),https://education.hunter.cuny.edu/academics/graduate-programs/adolescent-french-advanced-certificate/graduate-adolescent-french-advanced-certificate-course-sequence-and-program-tracker-4-semester-fall-start/,"SEDF 70300, SEDF 70400, SEDC 71000, SEDF 70500, SEDC 71200, SPED 70800, SEDF 70600, SEDC 72200, SEDC 74100, SEDC 72000, SEDC 75201"
Adolescent French (MA),https://education.hunter.cuny.edu/academics/graduate-programs/adolescent-french-ma/graduate-adolescent-french-ma-full-time-course-sequence-and-program-tracker-4-semester-fall-start/,"SEDF 70300, SEDF 70400, SEDC 71000, SEDF 70500, SEDC 71200, SPED 70800, SEDF 70600, SEDC 72200, SEDC 74100, SEDC 72000, SEDC 75201"
Adolescent Italian (Advanced Certificate),https://education.hunter.cuny.edu/academics/graduate-programs/adolescent-italian-advanced-certificate/graduate-adolescent-italian-advanced-certificate-course-sequence-and-program-tracker-4-semester-fall-start/,"SEDF 70300, SEDF 70400, SEDC 71000, SEDF 70500, SEDC 71200, SPED 70800, SEDF 70600, SEDC 72200, SEDC 74100, SEDC 72000, SEDC 75202"
Adolescent Italian (MA),https://education.hunter.cuny.edu/academics/graduate-programs/adolescent-italian-ma/graduate-adolescent-italian-ma-full-time-course-sequence-and-program-tracker-fall-start/,"SEDF 70300, SEDF 70400, SEDC 71000, SEDF 70500, SEDC 71200, SPED 70800, SEDF 70600, SEDC 72200, SEDC 74100, SEDC 72000, SEDC 75202"
Adolescent Latin (Advanced Certificate),https://education.hunter.cuny.edu/academics/graduate-programs/adolescent-latin-advanced-certificate/graduate-adolescent-latin-advanced-certificate-course-sequence-and-program-tracker-4-semester-fall-start/,"SEDF 70300, SEDF 70400, SEDC 71000, SEDF 70500, LATED 71200, SPED 70800, SEDF 70600, LATED 71300, SEDC 72000, LATED 73100"
Adolescent Latin (MA),https://education.hunter.cuny.edu/academics/graduate-programs/adolescent-latin-ma/graduate-adolescent-latin-ma-full-time-course-sequence-and-program-tracker-fall-start/,"SEDF 70300, SEDF 70400, SEDC 71000, SEDF 70500, LATED 71200, SPED 70800, SEDF 70600, LATED 71300, SEDC 72000, LATED 73100"
Adolescent Mathematics (Advanced Certificate),https://education.hunter.cuny.edu/academics/graduate-programs/adolescent-mathematics-advanced-certificate/program-sequence-for-fall-24-admits-adolescent-mathematics-advanced-certificate/,"SEDF 70300, SEDF 70400, SEDC 71000, SEDC 71300, SEDC 70800, EDUC 71500, SEDF 72000, SEDC 72300, SEDC 70900, SPED 70800, SEDC 72000, SEDC 75300, SEDC 77350"
Adolescent Mathematics (MA),https://education.hunter.cuny.edu/academics/graduate-programs/adolescent-mathematics-ma/program-sequence-for-fall-24-admits-adolescent-mathematics-ma/,"SEDF 70300, SEDF 70400, SEDC 71000, SEDC 71300, SEDC 70800, EDUC 71500, SEDF 72000, SEDC 72300, SEDC 70900, SPED 70800, SEDC 72000, SEDC 75300, SEDC 77350"
Adolescent Mathematics Professional Certificate (MA),https://education.hunter.cuny.edu/academics/graduate-programs/adolescent-mathematics-professional-certificate-ma/,""
Adolescent Physics (Advanced Certificate),https://education.hunter.cuny.edu/academics/graduate-programs/adolescent-physics-advanced-certificate/graduate-adolescent-physics-advanced-certificate-full-time-course-sequence-and-program-tracker-fall-start/,"SEDF 70300, SEDF 70400, SEDC 71000, SEDF 70500, SEDC 71300, SPED 70800, SEDF 70600, SEDC 72400, SEDC 74100, SEDC 72000, SEDC 75403"
Adolescent Physics (MA),https://education.hunter.cuny.edu/academics/graduate-programs/adolescent-physics-ma/graduate-adolescent-physics-ma-full-time-course-sequence-and-program-tracker-fall-start/,"SEDF 70300, SEDF 70400, SEDC 71000, SEDF 70500, SEDC 71300, SPED 70800, SEDF 70600, SEDC 72400, SEDC 74100, SEDC 72000, SEDC 75403"
Adolescent Social Studies (Advanced Certificate),https://education.hunter.cuny.edu/academics/graduate-programs/adolescent-social-studies-advanced-certificate/program-sequence-for-fall-24-admits-adolescent-social-studies-advanced-certificate/,"SEDF 70300, SEDF 70400, EDUC 71500, SEDC 71500, SEDC 70800, SEDF 72000, SEDC 71000, SPED 70800, SEDC 72500, SEDC 70900, SEDC 77500, SEDC 72000, SEDC 75500, SEDC 77550"
Adolescent Social Studies (MA),https://education.hunter.cuny.edu/academics/graduate-programs/adolescent-social-studies-ma/program-sequence-for-fall-24-admits-adolescent-social-studies-ma/,"SEDC 72000, SEDF 70300, SEDF 70400, SEDC 71000, EDUC 71500, SEDC 71500, SEDC 70800, SEDF 72000, SPED 70800, SEDC 72500, SEDC 70900, SEDC 77500, SEDC 75500, SEDC 77550"
Adolescent Spanish (Advanced Certificate),https://education.hunter.cuny.edu/academics/graduate-programs/adolescent-spanish-advanced-certificate/graduate-adolescent-spanish-advanced-certificate-course-sequence-and-program-tracker-fall-start/,"SEDF 70300, SEDF 70400, SEDC 71000, SEDF 70500, SEDC 71200, SPED 70800, SEDF 70600, SEDC 72200, SEDC 74100, SEDC 72000, SEDC 75203"
Adolescent Spanish (MA),https://education.hunter.cuny.edu/academics/graduate-programs/adolescent-spanish-ma/spanish-adolescent-spanish-ma-full-time-course-sequence-and-program-tracker-fall-start/,"SEDF 70300, SEDF 70400, SEDC 71000, SEDF 70500, SEDC 71200, SPED 70800, SEDF 70600, SEDC 72200, SEDC 74100, SEDC 72000, SEDC 75203"
Adolescent Special Education (Advanced Certificate),https://education.hunter.cuny.edu/academics/graduate-programs/adolescent-special-education-advanced-certificate/adolescent-special-education-advanced-certificate-course-sequence-and-program-tracker-part-time-summer-start/,"SPED 70050, SPED 70300, SPED 70100, SPED 70200, SPED 77100, SPED 77200, SPED 70400, SPED 77300, SPED 77400"
Adolescent Special Education – Generalist (MSEd),https://education.hunter.cuny.edu/academics/graduate-programs/adolescent-special-education-generalist-msed/adolescent-special-education-generalist-msed-course-sequence-and-program-tracker-full-time-fall-start/,"SPED 70050, SPED 70100, SPED 70200, SEDC 71600, SEDC 72000, EDLIT 75500, SPED 70300, SEDF 71400, SEDC 71700, SPED 70450, SPED 78000, SPED 77100, SPED 77600, SEDC 71800, SPED 77200, SPED 77500, SPED 77300, SPED 77400, SPED 77550"
Adolescent Special Education – Generalist (MSEd) Online,https://education.hunter.cuny.edu/academics/graduate-programs/adolescent-special-education-generalist-msed-online/adolescent-generalist-special-education-generalist-msed-online-course-sequence-and-program-tracker-full-time-summer-start/,"SPED 70200, SPED 70050, SPED 70300, SPED 70450, SEDC 71600, SEDC 71800, EDLIT 75500, SEDC 71700, SEDF 71400, SPED 78000, SPED 70100, SEDC 72000, SPED 77100, SPED 77600, SPED 77200, SPED 77500, SPED 77300, SPED 77400, SPED 77550"
Applied Behavior Analysis (Advanced Certificate),https://education.hunter.cuny.edu/academics/graduate-programs/applied-behavior-analysis-advanced-certificate/applied-behavior-analysis-advanced-certificate-two-year-5th-edition-verified-course-sequence/,""
Applied Behavior Analysis (MS),https://education.hunter.cuny.edu/academics/graduate-programs/applied-behavior-analysis-ms/applied-behavior-analysis-ms-two-year-course-sequence-for-students-matriculated-after-spring-2021/,"SPED 70450, CEDF 71500"
Bilingual Childhood Education (MSEd),https://education.hunter.cuny.edu/academics/graduate-programs/bilingual-childhood-education-msed/program-sequence-for-fall-24-admits-bilingual-childhood-education-msed/,"BILED 70100, CEDF 70900, CEDC 71350, CEDC 70600, BILED 75500, BILED 77900, CEDC 70500, BILED 70800, BILED 70900, BILED 71100, BILED 71200, BILED 71300, CEDC 70100, BILED 77800, BILED 76800, BILED 76900, CEDC 70300, CEDF 72000, SPED 70800, BILED 78000, BILED 78200, BILED 78300"
Bilingual Early Childhood Education (MSEd),https://education.hunter.cuny.edu/academics/graduate-programs/bilingual-early-childhood-education-msed/bilingual-early-childhood-education-msed-course-sequence-and-program-tracker-full-time-fall-start/,"BILED 70100, ECF 70000, ECF 70100, ECC 71400, ECC 71500, ECC 70300, ECC 71300, BILED 77100, BILED 77800, BILED 76800, BILED 76900, BILED 77900, ECF 70200, ECC 70600, BILED 71150, BILED 71100, BILED 71200, BILED 71300, ECC 70500, ECC 70900, ECC 70800, ECC 71200, ECC 72000, ECC 71650, ECC 71750, ECC 71850"
Bilingual Early Childhood Education – with prior certification in Childhood Education, Special Education or TESOL (MSEd),https://education.hunter.cuny.edu/academics/graduate-programs/bilingual-early-childhood-education-with-prior-nys-certification-in-childhood-education-special-education-or-tesol-msed/bilingual-early-childhood-education-with-prior-nys-certification-in-childhood-education-special-education-or-tesol-msed-course-sequence-and-program-tracker-full-time-fall-start/,"BILED 70100, ECF 70000, ECF 70100, ECC 71500, ECF 70200, ECC 70300, ECC 70900, BILED 77800, BILED 76800, BILED 76900, ECC 71300, BILED 77900, ECC 70800, BILED 71150, BILED 71100, BILED 71200, BILED 71300, ECC 72000, ECC 71650, ECC 71750, ECC 71850"
Bilingual Early Childhood Education – with prior certification in Early Childhood Education (MSEd),https://education.hunter.cuny.edu/academics/graduate-programs/bilingual-early-childhood-education-with-prior-nys-certification-in-early-childhood-education-msed/bilingual-early-childhood-education-with-prior-nys-certification-in-early-childhood-education-msed-course-sequence-and-program-tracker-full-time-fall-start/,"BILED 70100, BILED 77900, BILED 71150, BILED 71100, BILED 71300, ECC 71500, BILED 77100, ECC 70300, ECC 72000, BILED 77800, BILED 76800, BILED 76900, ECC 70800, ECC 71300, ECC 70400, ECC 70900, ECF 70200, ECC 71650, ECC 71750, ECC 71850"
Bilingual Education Extension – NYS Teachers (Advanced Certificate),https://education.hunter.cuny.edu/academics/graduate-programs/bilingual-education-extension-nys-teachers-advanced-certificate/bilingual-education-extension-nys-teachers-advanced-certificate-course-sequence-and-program-tracker-full-time-fall-start/,"BILED 77900, BILED 71150, BILED 71100, BILED 71200, BILED 71300, BILED 70100, BILED 77100, BILED 77800, BILED 76800, BILED 76900"
Bilingual Extension for Pupil Personnel Services (Advanced Certificate),https://education.hunter.cuny.edu/academics/graduate-programs/bilingual-extension-for-pupil-personnel-services-advanced-certificate/bilingual-extension-for-pupil-personnel-services-advanced-certificate-course-sequence-and-program-tracker-full-time-fall-start/,"BILED 77900, BILED 75500, BILED 71700, BILED 70100"
Blind and Visually Impaired for NYS Certified Teachers (Advanced Certificate),https://education.hunter.cuny.edu/academics/graduate-programs/blind-and-visually-impaired-advanced-certificate/blind-and-visually-impaired-for-nys-certified-teachers-advanced-certificate-course-sequence-and-program-tracker/,"SPED 70050, SPED 74000, SPED 74100, SPED 74200, SPED 74300, SPED 74700, SPED 74500, SPED 74400, SPED 71451, SPED 74800, SPED 74850, SPED 74852"
Blind and Visually Impaired (MSEd),https://education.hunter.cuny.edu/academics/graduate-programs/blind-and-visually-impaired-msed/blind-and-visually-impaired-msed-2-year-course-sequence-and-program-tracker/,"CEDF 70900, SPED 70050, SPED 74000, SPED 74100, CEDC 70450, CEDC 70550, CEDC 72250, SPED 74200, SPED 74300, CEDC 70350, CEDC 72900, SPED 74500, SPED 74400, SPED 79100, SPED 74600, SPED 70700, SPED 74850, SPED 74852, HED 71500, SPED 70650, SPED 70250, SPED 74700, SPED 74854, SPED 74856"
Blind and Visually Impaired – with Prior NYS Certification (MSEd),https://education.hunter.cuny.edu/academics/graduate-programs/blind-and-visually-impaired-with-prior-nys-certification-msed/blind-and-visually-impaired-with-prior-nys-certification-msed-course-sequence-and-program-tracker/,"SPED 70050, SPED 74000, SPED 74100, SPED 74600, SPED 74200, SPED 74300, SPED 70250, SPED 74500, SPED 74400, SPED 70700, SPED 79100, SPED 74850, SPED 74852, SPED 74700, SPED 70650, SPED 74854, SPED 74856"
Blind and Visually Impaired – Orientation and Mobility (Advanced Certificate),https://education.hunter.cuny.edu/academics/graduate-programs/blind-and-visually-impaired-orientation-and-mobility-advanced-certificate/blind-and-visually-impaired-orientation-and-mobility-advanced-certificate-course-sequence-and-program-tracker/,"SPED 76800, SPED 76500, SPED 76600, SPED 74900, SPED 76900, SPED 76700"
Childhood Education (MSEd),https://education.hunter.cuny.edu/academics/graduate-programs/childhood-education-msed/program-sequence-for-fall-23-admits-and-beyond-childhood-education-msed-track-1/,"CEDC 71350, CEDF 70600, CEDF 70900, CEDC 70300, CEDC 70700, CEDF 72000, CEDC 70600, CEDC 70100, EDUC 71500, CEDC 70800, CEDF 71600, CEDC 70200, CEDC 70500, SPED 70800, CEDC 70900, CEDC 72400, CEDC 72750"
Childhood Education with a Specialization in STEM (MSEd),https://education.hunter.cuny.edu/academics/graduate-programs/childhood-education-with-a-specialization-in-stem-msed/,""
Childhood Special Education – Behavior Disorders (Advanced Certificate),https://education.hunter.cuny.edu/academics/graduate-programs/childhood-special-education-behavior-disorders-advanced-certificate/,""
Childhood Special Education – Behavior Disorders (MSEd),https://education.hunter.cuny.edu/academics/graduate-programs/childhood-special-education-behavior-disorders-msed/,""
Childhood Special Education – Behavior Disorders – with prior NYS Childhood or PreK-6 Certification (MSEd),https://education.hunter.cuny.edu/academics/graduate-programs/childhood-special-education-behavior-disorders-with-prior-nys-childhood-or-prek-6-certification-msed/,""
Childhood Special Education – Learning Disabilities (Advanced Certificate),https://education.hunter.cuny.edu/academics/graduate-programs/childhood-special-education-learning-disabilities-advanced-certificate/childhood-special-education-learning-disabilities-advanced-certificate-part-time-course-sequence-and-program-tracker/,"SPED 70050, SPED 70300, SPED 70100, SPED 70200, SPED 78100, SPED 78200, SPED 70400, SPED 78300, SPED 78400"
Childhood Special Education – Learning Disabilities (MSEd),https://education.hunter.cuny.edu/academics/graduate-programs/childhood-special-education-learning-disabilities-msed/childhood-special-education-learning-disabilities-msed-course-sequence-and-program-tracker-full-time-fall-start/,"CEDF 70900, CEDC 70450, SPED 70050, SPED 70450, HED 71500, CEDC 70550, SPED 78000, SPED 70100, SPED 78100, CEDC 70350, CEDC 72250, SPED 70300, SPED 72300, SPED 72400, SPED 78200, SPED 70550, SPED 70200, SPED 70600, SPED 78400, CEDC 72900, SPED 72500"
Childhood Special Education – Learning Disabilities with prior NYS Childhood or PreK-6 Certification (MSEd),https://education.hunter.cuny.edu/academics/graduate-programs/childhood-special-education-learning-disabilities-with-prior-nys-childhood-or-prek-6-certification-msed/childhood-special-education-learning-disabilities-with-prior-nys-childhood-or-prek-6-certification-msed-course-sequence-and-program-tracker-full-time-fall-start/,"SPED 70050, SPED 70300, SPED 70450, SPED 78000, SPED 70200, SPED 70100, SPED 70600, SPED 78100, SPED 72300, SPED 72400, SPED 78200, SPED 70550, SPED 78400, SPED 72500"
Childhood Special Education – Severe/Multiple Disabilities (MSEd),https://education.hunter.cuny.edu/academics/graduate-programs/childhood-special-education-severemultiple-disabilities-msed/childhood-special-education-severe-multiple-disabilities-msed-2-year-course-sequence-and-program-tracker/,"CEDF 70900, CEDC 70550, SPED 70050, SPED 79000, SPED 79100, CEDC 70450, CEDC 72250, SPED 79200, SPED 70650, SPED 70250, CEDC 70350, CEDC 72900, SPED 74600, SPED 70700, SPED 78150, SPED 79550, SPED 79552, HED 71500, SPED 79300, SPED 78350, SPED 79551, SPED 79553"
Childhood Special Education – Severe/Multiple Disabilities with prior NYS Childhood or PreK-6 Certification (MSEd),https://education.hunter.cuny.edu/academics/graduate-programs/childhood-special-education-severemultiple-disabilities-with-prior-nys-childhood-or-prek-6-certification-msed/childhood-special-education-severe-multiple-disabilities-with-prior-nys-childhood-or-prek-6-certification-msed-course-sequence-and-program-tracker-fall-start/,"SPED 70050, SPED 79000, SPED 79100, SPED 78150, SPED 79200, SPED 70650, SPED 70250, SPED 74600, SPED 70700, SPED 79550, SPED 79552, SPED 79300, SPED 78350, SPED 79551, SPED 79553"
Clinical Rehabilitation Counseling (MSEd),https://education.hunter.cuny.edu/academics/graduate-programs/rehabilitation-counseling-msed/clinical-rehabilitation-counseling-course-sequence-and-program-tracker-fall-start/,""
Computer Science Education for New York State Certified Teachers (Advanced Certificate),https://education.hunter.cuny.edu/academics/graduate-programs/computer-science-education-for-new-york-state-certified-teachers-advanced-certificate/computer-science-education-for-new-york-state-certified-teachers-advanced-certificate-course-sequence/,"SEDC 71900, SEDC 72900, SEDC 73600"
Computer Science Education (MSEd),https://education.hunter.cuny.edu/academics/graduate-programs/computer-science-education-msed/computer-science-education-msed-course-sequence/,"SEDC 71000, SEDF 70300, SEDF 70400, SEDF 70500, SEDC 72000, SPED 70800, SEDC 71900, SEDC 73600, SEDF 70600, SEDC 72900"
Danced Education (Advanced Certificate),https://education.hunter.cuny.edu/academics/graduate-programs/dance-advanced-certificate/program-sequence-dance-education-advanced-certificate/,"SEDF 70300, CEDF 71300, SEDC 71000, EDUC 72000, SEDF 72000, DANED 76000, EDUC 71500, EDUC 70800, DANED 76200, SPED 70800, EDUC 70900, DANED 76605"
Dance Education (MA),https://education.hunter.cuny.edu/academics/graduate-programs/dance-education-ma/program-sequence-for-fall-24-admits-dance-education-ma/,"SEDF 70300, CEDF 71300, DANED 76000, EDUC 70800, EDUC 71500, SEDC 71000, DANED 76200, EDUC 70900, SPED 70800, SEDF 72000, DANED 76605, EDUC 72000"
Dance Education – with initial NYS Certification in Dance (MA),https://education.hunter.cuny.edu/academics/graduate-programs/dance-education-with-initial-nys-certification-in-dance-ma/program-sequence-for-fall-24-admits-dance-education-with-initial-nys-certification-in-dance-ma/,"DANED 76000, EDUC 70800, DANED 76200, EDUC 70900, DANED 76400"
Dance Education – with 34 credits in Dance and initial NYS Certification in another subject (MA),https://education.hunter.cuny.edu/academics/graduate-programs/dance-education-with-34-credits-in-dance-and-initial-nys-certification-in-another-subject-ma/program-sequence-for-fall-24-admits-dance-education-with-34-credits-in-dance-and-initial-nys-certification-in-another-subject-ma/,"DANED 76000, EDUC 70800, DANED 76200, EDUC 70900, DANED 76602"
Deaf and Hard of Hearing (MSEd),https://education.hunter.cuny.edu/academics/graduate-programs/deaf-and-hard-of-hearing-msed/deaf-and-hard-of-hearing-msed-course-sequence-and-program-tracker-fall-start/,"SPED 72000, SPED 73000, SPED 73600, HED 71500, CEDF 70900, SPED 70200, SPED 72100, SPED 73500, SPED 70100, SPED 72200, SPED 73100, SPED 70700, CEDC 72900, SPED 73300, SPED 73700, SPED 73750, SPED 73751, SPED 73760, SPED 73761, SPED 73762, SPED 73763"
Deaf and Hard of Hearing – with prior NYS Certification (MSEd),https://education.hunter.cuny.edu/academics/graduate-programs/deaf-and-hard-of-hearing-with-prior-nys-certification-msed/deaf-and-hard-of-hearing-with-prior-nys-certification-msed-course-sequence-and-program-tracker-fall-start/,"SPED 72000, SPED 73000, SPED 73600, SPED 72100, SPED 73500, SPED 70200, SPED 70100, SPED 72200, SPED 73100, SPED 70700, SPED 73300, SPED 73700"
Early Childhood Education (Advanced Certificate),https://education.hunter.cuny.edu/academics/graduate-programs/early-childhood-education-advanced-certificate/,""
Early Childhood Education (MSEd),https://education.hunter.cuny.edu/academics/graduate-programs/early-childhood-education-msed/early-childhood-education-msed-course-sequence-full-time-fall-start/,"ECF 70000, ECF 70100, ECC 70300, ECC 70500, ECC 71200, ECC 70700, ECC 71500, ECC 70600, ECC 70800, ECC 71300, ECC 71100, ECC 71400, ECF 70200, ECC 71000, ECC 72000, ECC 71600, ECC 71700, ECC 71800"
Early Childhood Education – with prior NYS Certification (MSEd),https://education.hunter.cuny.edu/academics/graduate-programs/early-childhood-education-with-prior-nys-certification-msed/,""
Early Childhood Development and Learning: Diverse Children and Families: Additional NYS Certification (Advanced Certificate),https://education.hunter.cuny.edu/academics/graduate-programs/early-childhood-development-and-learning-diverse-children-and-families-additional-nys-certification-advanced-certificate/early-childhood-development-and-learning-diverse-children-and-families-additional-nys-certification-advanced-certificate-course-sequence-and-program-tracker/,"SPEDE 76800, SPEDE 76900, SPEDE 77600, SPEDE 77000, SPEDE 77400, SPEDE 77951, SPEDE 77200, SPEDE 77300"
Early Childhood Development and Learning: Diverse Children and Families (MSEd),https://education.hunter.cuny.edu/academics/graduate-programs/early-childhood-development-and-learning-diverse-children-and-families-msed/graduate-early-childhood-development-and-learning-diverse-children-and-families-msed-course-sequence-and-program-tracker-full-time-fall-start/,"ECF 70000, ECC 70300, SPEDE 76800, SPEDE 76900, ECC 71200, SPEDE 77300, ECC 70400, ECC 70900, SPEDE 77000, SPEDE 77200, SPEDE 77600, SPED 70600, ECC 70700, SPEDE 77100, SPEDE 77400, SPEDE 77810, SPEDE 77910, HED 71500, ECC 71300, SPED 79200, SPEDE 70700, SPEDE 77820, SPEDE 77920, SPEDE 77800"
Early Childhood Development and Learning: Diverse Children and Families – with prior NYS Certification in Early Childhood (MSEd),https://education.hunter.cuny.edu/academics/graduate-programs/early-childhood-development-and-learning-diverse-children-and-families-with-prior-nys-certification-in-early-childhood-msed/graduate-early-childhood-development-and-learning-diverse-children-and-families-with-prior-nys-certification-in-early-childhood-msed-course-sequence-and-program-tracker/,"SPEDE 77600, SPEDE 77300, SPEDE 77920, SPEDE 77910, SPEDE 77800"
Early Childhood Development and Learning: Diverse Children and Families with Annotation in Severe/Multiple Disabilities (MSEd),https://education.hunter.cuny.edu/academics/graduate-programs/early-childhood-development-and-learning-diverse-children-and-families-with-annotation-in-severe-multiple-disabilities-msed/early-childhood-development-and-learning-diverse-children-and-families-with-annotation-in-severe-multiple-disabilities-msed-2-year-course-sequence-and-program-tracker/,"SPED 70000, ECF 70000, ECC 70300, SPED 79000, ECC 70600, ECC 71200, SPEDE 77000, SPED 79200, SPEDE 77300, SPEDE 77200, ECC 70700, ECC 70900, SPED 79100, SPED 74600, SPED 70700, SPEDE 79550, SPEDE 79552, HED 71500, SPED 70650, SPED 79300, SPEDE 77400, SPEDE 77100"
Early Childhood Development and Learning: Diverse Children and Families with Annotation in Severe/Multiple Disabilities with prior NYS Certification in an area other than Early Childhood (MSEd),https://education.hunter.cuny.edu/academics/graduate-programs/early-childhood-development-and-learning-diverse-children-and-families-with-annotation-in-severe-multiple-disabilities-with-prior-nys-certification-in-an-area-other-than-early-childhood-msed/early-childhood-development-and-learning-diverse-children-and-families-with-annotation-in-severe-multiple-disabilities-with-prior-nys-certification-in-an-area-other-than-early-childhood-msed-2-year/,"SPED 70000, ECC 70300, SPED 79000, SPED 79100, SPEDE 77200, ECC 71200, SPED 79200, SPED 70650, SPEDE 77000, SPEDE 77300, SPED 74600, SPED 70700, SPEDE 79550, SPEDE 79552, SPED 79300, SPEDE 77100, SPEDE 77400"
Early Childhood Development and Learning: Diverse Children and Families with Annotation in Severe/Multiple Disabilities with prior NYS Certification in Early Childhood Education (MSEd),https://education.hunter.cuny.edu/academics/graduate-programs/early-childhood-development-and-learning-diverse-children-and-families-with-annotation-in-severe-multiple-disabilities-with-prior-nys-certification-in-early-childhood-education-msed/2-year-course-sequence-and-program-tracker/,"SPED 70000, SPED 70050, SPED 79000, SPED 79100, SPEDE 77200, SPED 79200, SPED 70650, SPEDE 77000, SPEDE 77300, SPED 74600, SPED 70700, SPEDE 79550, SPEDE 79552, SPEDE 77400, SPED 79300, SPEDE 77100"
East Harlem Teaching Residency – Adolescent Special Education (MSEd),https://education.hunter.cuny.edu/academics/graduate-programs/east-harlem-teaching-residency-adolescent-special-education-msed/,"CEDF 71500, SPED 78000, SPED 70050, SPED 70200, SPED 77100, SPED 77600, SPED 78900, SPED 70450, SPED 77300, EDLIT 75500, SEDC 71800, SEDF 71400, SPED 70100, SPED 77700, SEDC 71600, SEDC 71700"
East Harlem Teaching Residency – Childhood Special Education (MSEd),https://education.hunter.cuny.edu/academics/graduate-programs/east-harlem-teaching-residency-childhood-special-education-msed/,"CEDF 71500, SPED 70450, SPED 70300, CEDF 70900, CEDC 70100, CEDC 70500, SPED 78651, SPED 70200, CEDC 70200, SPED 70100, CEDC 77250, SPED 78000, SPED 78100, CEDC 70350, CEDF 70600, SPED 72300, SPED 72400, SPED 77700, CEDF 79200"
East Harlem Tutorial Program – Childhood Special Education (Advanced Certificate),https://education.hunter.cuny.edu/academics/graduate-programs/east-harlem-teaching-residency-childhood-special-education-advanced-certificate/,"SPED 70000, SPED 70400, SPED 70100, SPED 78100, SPED 78200, SPED 78300, SPED 78400"
Educational Leadership at Westchester Edith Winthrop Teacher Center (EWTC),https://education.hunter.cuny.edu/academics/graduate-programs/educational-leadership-at-westchester-edith-winthrop-teacher-center-ewtc/educational-leadership-at-westchester-edith-winthrop-teacher-center-ewtc-course-sequence-and-program-tracker/,""
Educational Leadership – SBL/SDL (MSEd) – Administrative Supervision (AdSup) Track,https://education.hunter.cuny.edu/academics/graduate-programs/educational-leadership-sblsdl-msed/educational-leadership-sbl-sdl-msed-adsup-cohort-course-sequence-and-program-tracker/,""
Educational Leadership – SBL/SDL (MSEd) – Collaborative Leadership Advancing School Success (CLASS) Track,https://education.hunter.cuny.edu/academics/graduate-programs/class-educational-leadership-sblsdl-msed/,""
Education Leadership – School District Leader (Advanced Certificate),https://education.hunter.cuny.edu/academics/graduate-programs/education-leadership-school-district-leader-advanced-certificate/,""
Educational Psychology (MA),https://education.hunter.cuny.edu/academics/graduate-programs/educational-psychology-ma/,""
Elementary Mathematics Specialist Program (MSEd),https://education.hunter.cuny.edu/academics/graduate-programs/elementary-mathematics-specialist-program-msed/,""
Gifted Education Extension (Advanced Certificate),https://education.hunter.cuny.edu/academics/graduate-programs/gifted-education-extension-advanced-certificate/,"SPED 75300, SPED 75400, SPED 75500, SPED 75600"
Intensive Teacher Institute – Bilingual Special Education (ITI-BSE) – Bilingual Extension Program,https://education.hunter.cuny.edu/academics/graduate-programs/subsidized-bilingual-extension-program/,"BILED 70100, BILED 77100, BILED 77900, BILED 71100, BILED 71200, BILED 71300, BILED 77800, BILED 76800, BILED 76900"
Literacy Education – Birth-Grade 6 (MSEd),https://education.hunter.cuny.edu/academics/graduate-programs/literacy-education-birth-grade-6-msed/literacy-education-birth-grade-6-msed-5-semester-course-sequence-and-program-tracker-fall-start/,"EDLIT 73500, EDLIT 73900, EDLIT 73200, EDLIT 73300, EDLIT 73100, EDLIT 73000, EDLIT 73400, EDLIT 74200, EDLIT 73600, EDLIT 74500, EDLIT 73700, EDLIT 74000"
Literacy Education – Grades 5-12 (MSEd),https://education.hunter.cuny.edu/academics/graduate-programs/literacy-education-grades-5-12-msed/literacy-education-grades-5-12-msed-5-semester-course-sequence-and-program-tracker-fall-start/,"SEDC 71100, EDLIT 75300, EDLIT 73500, EDLIT 75500, EDLIT 75600, EDLIT 73000, EDLIT 75700, EDLIT 74500, EDLIT 75200, EDLIT 75400, EDLIT 74000"
Mathematics Development (Advanced Certificate),https://education.hunter.cuny.edu/academics/graduate-programs/mathematics-development-advanced-certificate/,"CEDC 74000, CEDC 74400, CEDC 74700, CEDC 74800, CEDC 74900"
Mathematics and Technology (Advanced Certificate),https://education.hunter.cuny.edu/academics/graduate-programs/mathematics-and-technology-advanced-certificate/,"CEDC 74000, CEDC 77900, CEDC 71600, CEDC 74800, CEDC 74700"
Mental Health Counseling (Advanced Certificate),https://education.hunter.cuny.edu/academics/graduate-programs/mental-health-counseling-advanced-certificate/mental-health-counseling-advanced-certificate-course-sequence-and-program-tracker/,""
Mental Health Counseling (MSEd),https://education.hunter.cuny.edu/wp-content/uploads/2019/03/Mental-Health-Counselor-Sequence-of-Courses-919-4-5-19.pdf,""
Music Education (MA),https://education.hunter.cuny.edu/academics/graduate-programs/music-education-ma/program-sequence-for-fall-24-admits-music-education-ma/,"SEDF 70300, CEDF 71300, SEDC 71000, MUSED 67700, EDUC 70800, EDUC 71500, MUSED 67800, EDUC 70900, SPED 70800, SEDF 72000, EDUC 72000, SEDC 75600, SEDC 77650"
Music Education – with Initial NYS Music Certification (MA),https://education.hunter.cuny.edu/academics/graduate-programs/music-education-with-initial-nys-music-certification-ma/program-sequence-for-fall-24-admits-music-education-with-initial-nys-music-certification-ma/,"MUSED 67700, EDUC 70800, EDUC 71500, MUSED 67800, EDUC 70900, SEDC 77650"
NYC Teaching Collaborative – Adolescent Special Education (MSEd),https://education.hunter.cuny.edu/academics/graduate-programs/nyc-teaching-collaborative-adolescent-special-education/,"SPED 70300, SPED 70200, EDLIT 75500, SPED 77300, SEDF 71400, SPED 70450, SPED 78900, SPED 78000, SPED 77600, SPED 77100, SPED 70100, SEDC 71600, SEDC 71700, SEDC 71800, SPED 77700"
NYC Teaching Collaborative – Bilingual (MSEd),https://education.hunter.cuny.edu/academics/graduate-programs/nyc-teaching-collaborative-bilingual-msed/,"BILED 70100, BILED 77900, CEDC 70400, SPED 70800, BILED 78700, BILED 71100, BILED 77800, CEDC 70500, CEDF 70900, BILED 71700, CEDC 70300, BILED 78800, BILED 77100"
NYC Teaching Collaborative – Childhood Special Education D75 (MSEd),https://education.hunter.cuny.edu/academics/graduate-programs/nyc-teaching-collaborative-childhood-special-education-d75-msed/,"SPED 70000, SPED 78100, CEDF 70900, SPED 70200, SPED 70450, SPED 72400, SPED 78651, SPED 70100, SPED 72300, SPED 78652, SPED 75100, CEDC 70450, CEDC 70550, CEDC 72250, CEDC 70350, SPED 77700"
NYC Teaching Fellows – Adolescent Special Education (MSEd),https://education.hunter.cuny.edu/academics/graduate-programs/nyc-teaching-fellows-adolescent-special-education-msed/,"EDLIT 75500, SPED 78000, SPED 70200, SPED 78900, SPED 70300, SPED 77600, SPED 77100, SEDC 71600, SEDC 71700, SEDF 71400, SPED 70100, SPED 77700, SPED 70450, SPED 77300, SEDC 71800"
NYC Teaching Fellows – Bilingual (MSEd),https://education.hunter.cuny.edu/academics/graduate-programs/nyc-teaching-fellows-bilingual-msed/,"CEDC 70400, SPED 70800, BILED 70100, BILED 78700, BILED 71100, BILED 71150, BILED 77800, BILED 77900, CEDC 72250, CEDF 70900, CEDC 70500, BILED 71700, CEDC 70300, BILED 78800, BILED 77100"
NYC Teaching Fellows – Childhood Special Education D75 (MSEd),https://education.hunter.cuny.edu/academics/graduate-programs/nyc-teaching-fellows-childhood-special-education-msed/,"SPED 70050, CEDF 70900, SPED 70600, SPED 78651, SPEDE 77200, SPED 72400, SPED 78652, SPED 75100, CEDC 70450, CEDC 70550, CEDC 72250, SPED 70100, SPED 70450, SPED 72300, CEDC 70350"
Professional Certification (Advanced Preparation) in Special Education – Behavior Disorders (MSEd),https://education.hunter.cuny.edu/academics/graduate-programs/professional-certification-advanced-preparation-in-special-education-behavior-disorders-msed/,""
Professional Certification (Advanced Preparation) in Special Education – Early Childhood Special Education (MSEd),https://education.hunter.cuny.edu/academics/graduate-programs/professional-certification-advanced-preparation-in-special-education-early-childhood-special-education-msed/,"SPEDE 77300, SPEDE 77951"
Professional Certification (Advanced Preparation) in Special Education – Learning Disabilities (MSEd),https://education.hunter.cuny.edu/academics/graduate-programs/professional-certification-advanced-preparation-in-special-education-learning-disabilities-msed/,""
School Counseling (MSEd),https://education.hunter.cuny.edu/wp-content/uploads/2023/03/School-Counseling-Course-Sequence-2023.pdf,""
School Counseling with Bilingual Concentration (MSEd),https://education.hunter.cuny.edu/wp-content/uploads/2023/03/School-Counseling-Course-Sequence-2023.pdf,""
Science and Robotics (Advanced Certificate),https://education.hunter.cuny.edu/academics/graduate-programs/science-and-robotics-advanced-certificate/,"CEDC 71600, CEDC 77900, CEDC 77700, CEDC 77800, CEDC 77600"
Science and Technology (Advanced Certificate),https://education.hunter.cuny.edu/academics/graduate-programs/science-and-technology-advanced-certificate/,"CEDC 71600, CEDC 77600, CEDC 77700, CEDC 77800, CEDC 74200"
Severe and Multiple Disabilities Annotation Extension (Advanced Certificate),https://education.hunter.cuny.edu/academics/graduate-programs/severe-and-multiple-disabilities-annotation-extension-advanced-certificate/severe-and-multiple-disabilities-annotation-extension-advanced-certificate-course-sequence-and-program-tracker/,"SPED 79000, SPED 79100, SPED 74600, SPED 79200, SPED 70650, SPED 79300, SPED 79550, SPED 79552, SPED 70200, SPED 78150, SPED 70700, SPED 70250, SPED 78350"
TESOL Adult (MA),https://education.hunter.cuny.edu/academics/graduate-programs/tesol-adult-ma/tesol-adult-ma-course-sequence-and-program-tracker/,"EDESL 78200, LING 70300, LING 70400, EDESL 77500, LING 77300, EDESL 74200, EDESL 78000, EDESL 78100, EDESL 74100, EDESL 74300, EDESL 79800, EDESL 79900"
TESOL (Advanced Certificate),https://education.hunter.cuny.edu/academics/graduate-programs/tesol-with-prior-nys-certification-advanced-certificate/tesol-advanced-certificate-course-sequence-and-program-tracker/,"EDESL 78300, LING 70300, EDESL 73200, BILED 70100, EDESL 78700, LING 77300, EDESL 75200"
TESOL – with prior MA in TESOL or Linguistics (Advanced Certificate),https://education.hunter.cuny.edu/academics/graduate-programs/tesol-advanced-certificate/teaching-english-to-speakers-of-other-languages-tesol-with-prior-ma-in-tesol-or-linguistics-advanced-certificate-course-sequence-and-program-tracker/,"EDESL 78300, BILED 70100, CEDF 71300, EDESL 75200, EDESL 78700, SPED 70800, EDESL 79100, EDESL 79200, EDESL 75300"
TESOL Intensive Teacher Institute (ITI),https://education.hunter.cuny.edu/academics/graduate-programs/tesol-intensive-teacher-institute-iti/,""
TESOL PreK-12 (MA),https://education.hunter.cuny.edu/academics/graduate-programs/tesol-ma/teaching-english-to-speakers-of-other-languages-tesol-prek-12-ma-course-sequence-and-program-tracker/,"EDESL 78300, LING 70300, BILED 70100, CEDF 71300, EDESL 75200, EDESL 78700, LING 70400, LING 77300, SPED 70800, EDESL 77500, EDESL 79100, EDESL 79200, EDESL 75300"
TESOL PreK-12 – with prior NYS Certification (MA),https://education.hunter.cuny.edu/academics/graduate-programs/tesol-with-prior-nys-certification-ma/teaching-english-to-speakers-of-other-languages-tesol-prek-12-with-prior-nys-certification-ma-course-sequence-and-program-tracker/,"EDESL 78300, LING 70300, BILED 70100, EDESL 78700, LING 70400, LING 77300, EDESL 77500, EDESL 79100, EDESL 79200, EDESL 75200, EDESL 75300"
Visual Arts Education (MA),https://education.hunter.cuny.edu/academics/graduate-programs/visual-arts-education-ma/program-sequence-for-fall-24-admits-visual-arts-education-ma/,"SEDF 70300, CEDF 71300, SEDC 71000, ARTED 71000, EDUC 70800, EDUC 71500, SEDF 72000, EDUC 72000, ARTED 71100, EDUC 70900, SPED 70800, ARTED 71200"
Visual Arts Education – with prior NYS Certification (MA),https://education.hunter.cuny.edu/academics/graduate-programs/visual-arts-education-with-prior-nys-certification-ma/program-sequence-for-fall-24-admits-visual-arts-education-with-prior-nys-certification-ma/,"ARTED 71000, EDUC 70800, EDUC 71500, ARTED 71100, EDUC 70900, ARTED 71200"
Visual Impairment – Combined Rehabilitation Teaching and Orientation and Mobility (MSEd),https://education.hunter.cuny.edu/academics/graduate-programs/visual-impairment-combined-rehabilitation-teaching-and-orientation-and-mobility-msed/visual-impairment-combined-rehabilitation-teaching-and-orientation-and-mobility-msed-course-sequence-and-program-tracker/,"SPED 70050, SPED 74000, SPED 74100, SPED 76000, SPED 74300, SPED 74700, SPED 76800, SPED 76100, SPED 74400, SPED 76500, SPED 76200, SPED 76600, SPED 76300, SPED 76900, SPED 76700, SPED 76400"
Visual Impairment – Rehabilitation Teaching (MSEd),https://education.hunter.cuny.edu/academics/graduate-programs/visual-impairment-rehabilitation-teaching-msed/visual-impairment-rehabilitation-teaching-msed-course-sequence/,"SPED 70000, SPED 74000, SPED 74100, SPED 76000, SPED 74300, SPED 74700, SPED 76100, SPED 74400, SPED 76200, SPED 76300, SPED 76400"
Yonkers Teacher Academy – Adolescent Special Education (MSEd),https://education.hunter.cuny.edu/academics/graduate-programs/yonkers-teacher-academy-adolescent-special-education-msed/,"SPED 70050, SPED 70200, SPED 70100, SPED 70450, SPED 77100, SPED 77550, SPED 77300, SPED 77600, SEDC 71600, SEDF 71400, SPED 78000, SEDC 71800, EDLIT 75500, SPED 77700, SEDC 71700"
`

const structureJSONstring = `{"standards":
    ["ISTE Standard #1: Learner Educators continually improve their practice by learning from and with others and exploring proven and promising practices that leverage technology to improve student learning. ", 
    "ISTE Standard #2: Leader Educators seek out opportunities for leadership to support student empowerment and success and to improve teaching and learning.", 
    "ISTE Standard #3: Citizen Educators inspire students to positively contribute to and responsibly participate in the digital world.", 
    "ISTE Standard #4: Collaborator Educators dedicate time to collaborate with both colleagues and students to improve practice, discover and share resources and ideas, and solve problems. ", 
    "ISTE Standard #5: Designer Educators design authentic, learner-driven activities and environments that recognize and accommodate learner variability. Educators:", 
    "ISTE Standard #6: Facilitator Educators facilitate learning with technology to support student achievement of the ISTE Standards for Students.", 
    "ISTE Standard #7: Analyst Educators understand and use data to drive their instruction and support students in achieving their learning goals."
    ],
  "indicators":
    ["1a. Set professional learning goals to explore and apply pedagogical approaches made possible by technology and reflect on their effectiveness.", 
    "1b. Pursue professional interests by creating and actively participating in local and global learning networks.", 
    "1c. Stay current with research that supports improved student learning outcomes, including findings from the learning sciences.", 
    "2a. Shape, advance and accelerate a shared vision for empowered learning with technology by engaging with education stakeholders.", 
    "2b. Advocate for equitable access to educational technology, digital content, and learning opportunities to meet the diverse needs of all students.", 
    "2c. Model for colleagues the identification, exploration, evaluation, curation and adoption of new digital resources and tools for learning.", 
    "3a. Create experiences for learners to make positive, socially responsible contributions and exhibit empathetic behavior online that build relationships and community.", 
    "3b. Establish a learning culture that promotes curiosity and critical examination of online resources and fosters digital literacy and media fluency.", 
    "3c. Mentor students in the safe, legal and ethical practices with digital tools and the protection of intellectual rights and property.", 
    "3d. Model and promote management of personal data and digital identity and protect student data privacy.", 
    "4a. Dedicate planning time to collaborate with colleagues to create authentic learning experiences that leverage technology.", 
    "4b. Collaborate and co-learn with students to discover and use new digital resources and diagnose and troubleshoot technology issues.", 
    "4c. Use collaborative tools to expand students’ authentic, real world learning experiences by engaging virtually with experts, teams and students, locally and globally.", 
    "4d. Demonstrate cultural competency when communicating with students, parents and colleagues and interact with them as co collaborators in student learning.", 
    "5a. Use technology to create, adapt and personalize learning experiences that foster independent learning and accommodate learner differences and needs.", 
    "5b. Design authentic learning activities that align with content area standards and use digital tools and resources to maximize active, deep learning.", 
    "5c. Explore and apply instructional design principles to create innovative digital learning environments that engage and support learning.", 
    "6a. Foster a culture where students take ownership of their learning goals and outcomes in both independent and group settings.", 
    "6b. Manage the use of technology and student learning strategies in digital platforms, virtual environments, hands-on makerspaces or in the field.", 
    "6c. Create learning opportunities that challenge students to use a design process and computational thinking to innovate and solve problems.", 
    "6d. Model and nurture creativity and creative expression to communicate ideas, knowledge or connections.", 
    "7a. Provide alternative ways for students to demonstrate competency and reflect on their learning using technology.", 
    "7b. Use technology to design and implement a variety of formative and summative assessments that accommodate learner needs, provide timely feedback to students and inform instruction.", 
    "7c. Use assessment data to guide progress and communicate with students, parents and education stakeholders to build student self-direction."
    ]}
  `
