import AutoBinded from "../autoBinded"

import User from "../../model/user"
import zipCodeService from "../../services/zipcodeService";

export class UserController extends AutoBinded {

    async saveUser(user) {
        const userExistent = await User.findOne({cpf: user.cpf})
        if (userExistent) throw `User already registered with this cpf: ${user.cpf}`
        user.address = (user.zipcode) ? await this.getAddressFromZipCode(user.zipcode) : user.address
        return new User(user).save();
    }

    async getAddressFromZipCode(zipcode,) {
        const {
            data: {
                logradouro: address,
                bairro: district,
                localidade: city,
                uf: state
            }
        } = await zipCodeService.get(`${zipcode}/json`).catch(error => console.log(error))
        return {address, district, city, state}
    }
}