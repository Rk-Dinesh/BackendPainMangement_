const MedDataModel = require("../model/meddata_model");

class MedDataServices{
    static async registerMeddata(email,occupation,mobile,Hphone,ECP,Relationship,ECPh,MCN,MCNId,PHC,HealthF,Memberno,hcc,exp,DVDno,about_us,ReferDN,ReferDC,RDnphone,RGPn,RGPc,RGPnphone,physioN,physioP,physioC,claimN,DOI,Yw_cn,Addwp,cpwp,CPsur,CPph,InCP,InCA,InCCM,InCSur,InCPh,CmEA,Info_accuracy,perRelease,perXray,age,gender,height,Weight,bmi,blood_thinners,herbal_medication,pain_medication,drink_alcohol,drinks_per_day,allergies_to_drugs,allergic_reaction,what_else,claustrophobia,pacemaker,any_metal_in_body,surgery,PorthopaedicS,Complications_AS,Osteoarthritis,Rheumatoid_Arthritis,Tmedi,Hyper_active,Hypo_active,Heart_Attack,HBP,LBP,other,Hepatitis_B,Hepatitis_C,Stroke,Past_Blood,HIV,Kidney,Gastric,Indigestion,Ulcers,Venous,DVT,Varicose,joint,Asthma,Emphysema,Sleep_Apnoea,Pulmonary,smoker,Breast,Mastectomy,Shoulder,Management){
        try{
            const createMedData = new MedDataModel({email,occupation,mobile,Hphone,ECP,Relationship,ECPh,MCN,MCNId,PHC,HealthF,Memberno,hcc,exp,DVDno,about_us,ReferDN,ReferDC,RDnphone,RGPn,RGPc,RGPnphone,physioN,physioP,physioC,claimN,DOI,Yw_cn,Addwp,cpwp,CPsur,CPph,InCP,InCA,InCCM,InCSur,InCPh,CmEA,Info_accuracy,perRelease,perXray,age,gender,height,Weight,bmi,blood_thinners,herbal_medication,pain_medication,drink_alcohol,drinks_per_day,allergies_to_drugs,allergic_reaction,what_else,claustrophobia,pacemaker,any_metal_in_body,surgery,PorthopaedicS,Complications_AS,Osteoarthritis,Rheumatoid_Arthritis,Tmedi,Hyper_active,Hypo_active,Heart_Attack,HBP,LBP,other,Hepatitis_B,Hepatitis_C,Stroke,Past_Blood,HIV,Kidney,Gastric,Indigestion,Ulcers,Venous,DVT,Varicose,joint,Asthma,Emphysema,Sleep_Apnoea,Pulmonary,smoker,Breast,Mastectomy,Shoulder,Management});
            return await createMedData.save();
        }catch(err){
            throw err;
        }
    }

    static async getmeddata(email){
        try {
            
            return await MedDataModel.findOne({email})
        } catch (error) {
            throw error
        }
    }

    static async deletemeddata(email){
        try{
            var query = {email : email};
            return await MedDataModel.findOneAndDelete(query);

        }catch(error){
            throw error;
        }
    }
}
module.exports = MedDataServices;