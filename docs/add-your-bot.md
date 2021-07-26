# How to add google dialogflow bot to vajra

1.After creating an agent in dialogflow ,click on **settings** for that agent.

  ![bot](https://ik.imagekit.io/oeeysgepuyd/vajra/docs/1_hhpVttQRH.PNG)

2.You will be redirected to following page and in general ,click on **Project ID**.
![bot setting project id](https://ik.imagekit.io/oeeysgepuyd/vajra/docs/2_LBSFoRd5p.PNG)

3.You will be redirected to following page and then in search type **IAM & Admin**
![IAM & admin](https://ik.imagekit.io/oeeysgepuyd/vajra/docs/3_HiVd5W0PQ.PNG)

4.You will be redirected to following page and then click on **service accounts**
![service accounts](https://ik.imagekit.io/oeeysgepuyd/vajra/docs/4_PNt2WuXC_.PNG)

5.It will be redirected to following page and click on **create service account**
![create service accounts](https://ik.imagekit.io/oeeysgepuyd/vajra/docs/5_Z0ZgjBuyJ.PNG)

Fill the necessary details and you can skip optional details and click on **done**

6.You we be getting an service account as shown below,in the actions click **manage keys**
![manage keys](https://ik.imagekit.io/oeeysgepuyd/vajra/docs/6_95Y__98hx.PNG)

7.After clicking you will redirected to following page and in the **keys** page click on **add key** and then **create new key**
 ![Add key](https://ik.imagekit.io/oeeysgepuyd/vajra/docs/7_W1ZmjcpTT.PNG)

8.After clicking on **create new key**, you will be getting popup to create **private key** for your bot as shown below. Make sure you tick mark is on *JSON* and then click on create
![json](https://ik.imagekit.io/oeeysgepuyd/vajra/docs/8_f9JwmirFj.PNG)
 
9.After clicking on **create ,the JSON file will be downloaded .Lastly in service accounts copy the email and in search type IAM .
![copy service acccount](https://ik.imagekit.io/oeeysgepuyd/vajra/docs/9_0IqrwbE85.png)
 
10.In IAM page click on ADD 
 ![add member](https://ik.imagekit.io/oeeysgepuyd/vajra/docs/10_9l6MrvwEV.PNG)

11.You will having a side menu to add new member and in New members add the copied email and select role as owner and ADD ANOTHER ROLE as Dialogflow API Admin and click on save.
 ![add member](https://ik.imagekit.io/oeeysgepuyd/vajra/docs/11_51IPxU_tf.PNG)

12.ADD your bot to vajra by giving the all necessary details and in JSON add the file you downloaded 
 
 ![loggin in](https://ik.imagekit.io/oeeysgepuyd/vajra/docs/12_S3dehuoxG.PNG)


