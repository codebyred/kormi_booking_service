import { WorkerBooking } from "../../model/worker/index.js";
import { v4 as uuidv4 } from "uuid";

import SSLCommerzPayment from 'sslcommerz-lts'

const store_id = 'kormi6625f82bf3446'
const store_passwd = 'kormi6625f82bf3446@ssl'
const is_live = false 

export const getBooking = async(req, res)=>{

}

export const saveBooking = async (req, res)=>{

    try{

        const booking = req.body;

        const bookingId = uuidv4();
    
        const data = {
            total_amount: 100,
            currency: 'BDT',
            tran_id:bookingId, 
            success_url: `http://localhost:3020/api/booking/success/${bookingId}`,
            fail_url: `http://localhost:3020/api/booking/fail/${bookingId}`,
            cancel_url: 'http://localhost:3000/cancel',
            ipn_url: 'http://localhost:3000/payment/ipn',
            shipping_method:"home",
            product_name:booking.workerId,
            product_category:"worker",
            product_profile:"general",
            cus_name:"user",
            cus_email:"user.email",
            cus_add:booking.address,
            cus_city:booking.city,
            cus_country:"Bangladesh",
            cus_phone:"01990262711",
            ship_name:"sss",
            ship_add1:booking.address,
            ship_city:booking.city,
            ship_postcode:booking.postcode,
            ship_country:"Bangladesh",
        };
    
        const sslcz = new SSLCommerzPayment(store_id, store_passwd, is_live)
        const sslczApiResponse =  await sslcz.init(data);
        const paymentGatewayURL = sslczApiResponse.GatewayPageURL;
        console.log(paymentGatewayURL)

        const workerBooking = await WorkerBooking.build({

            id: bookingId, 
            clientId: booking.clientId,
            workerId: booking.workerId,
            status:"pending",
            paid:false

        });

        await workerBooking.save();

        console.log(paymentGatewayURL)
        return res.json({url: paymentGatewayURL});

    }catch(e){

        return res.json({success:0, msg: "Could not book worker"});

    }


}

export const updateBookingStatus = async(req, res)=>{

    const bookingId = req.params.bookingId;

    await WorkerBooking.update({paid: true},{
        where:{
            id:bookingId
        }
    });

    return res.redirect("http://localhost:3000/payment/success");

}