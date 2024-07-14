import Birth from "../../model/birthModel.js";
import Death from "../../model/deathModel.js";

export const getBirthApplications = async (req, res) => {
    try {
        const birthApplications = await Birth.find();
        if (birthApplications.length == 0) {
            return res.status(400).json({
                message: "No Birth Applications found",
                data: []
            })
        }
        res.status(200).json({
            message: "Birth Applications fetched successfully",
            data: birthApplications
        })
    } catch (error) {
        console.error(error)
        res.status(500).send({
            error: 'Internal Server Error'
        })
    }
}
export const getSingleBirthApplication = async (req, res) => {
    try {
        const { userApplicationId } = req.params;
    const applicationFound = await Birth.findById(userApplicationId)
    if (!applicationFound) {
        return res.status(400).json({
            message: "No Application found with this id"
        })
    }
    res.status(200).json({
        message: "Birth Application Fetched",
        data: applicationFound
    })
    } catch (error) {
        console.error(error)
        res.status(500).send({
            error: 'Internal Server Error'
        })
    }
}
export const verifyBirthApplications = async (req, res) => {
    try {
        const { id } = req.params
    const applicationFound = await Birth.findById(id)
    if (!applicationFound) {
        return res.status(400).json({
            message: "No application with this id"
        })
    }
    if (!applicationFound.applicationStatus || !['underreview', 'rejected', 'verified'].includes(applicationFound.applicationStatus.toLowerCase())) {
        return res.status(400).json({
            message: "Invalid Application Status"
        })
    }
    const updateStatus = await Birth.findByIdAndUpdate(id, {
        applicationStatus: "verified"
    }, { new: true })
    res.status(200).json({
        message: "Application Verified Successfully",
        data: updateStatus
    })
    } catch (error) {
        console.error(error)
        res.status(500).send({
            error: 'Internal Server Error'
        })
    }

}
export const rejectBirthApplications = async (req, res) => {
    try {
        const { id } = req.params;
    if (!id || id == 0) {
        return res.status(400).json({
            message: "Please enter a valid id"
        })
    }
    const applicationFound = await Birth.findById(id);
    if (!applicationFound) {
        return res.status(400).json({
            message: "No application with this id"
        })
    }
    const rejectApplication = await Birth.findByIdAndDelete(id);
    res.status(200).json({
        message: `The Birth Application with id: ${id} is rejected successfully`,
    })
    } catch (error) {
        console.error(error)
        res.status(500).send({
            error: 'Internal Server Error'
        })
    }
}

//death
export const getDeathApplications = async (req, res) => {
    try {
        const DeathApplications = await Death.find();
        if (DeathApplications.length == 0) {
            return res.status(400).json({
                message: "No Death Applications found",
                data: []
            })
        }
        res.status(200).json({
            message: "Death Applications fetched successfully",
            data: DeathApplications
        })
    } catch (error) {
        console.error(error)
        res.status(500).send({
            error: 'Internal Server Error'
        })
    }
}
export const getSingleDeathApplication = async (req, res) => {
    try {
        const { userApplicationId } = req.params
        const applicationFound = await Death.findById(userApplicationId)
        if (!applicationFound) {
            return res.status(400).json({
                message: "No Application found with this id"
            })
        }
        res.status(200).json({
            message: "Death Application Updated",
            data: applicationFound
        })
    } catch (error) {
        console.error(error)
        res.status(500).send({
            error: 'Internal Server Error'
        })
    }
}
export const verifyDeathApplications = async (req, res) => {
    try {
        const { id } = req.params
        const applicationFound = await Death.findById(id)
        if (!applicationFound) {
            return res.status(400).json({
                message: "No application with this id"
            })
        }
        if (!applicationFound.applicationStatus || !['underreview', 'rejected', 'verified'].includes(applicationFound.applicationStatus.toLowerCase())) {
            return res.status(400).json({
                message: "Invalid Application Status"
            })
        }
        const updateStatus = await Death.findByIdAndUpdate(id, {
            applicationStatus: "verified"
        }, { new: true })
        res.status(200).json({
            message: "Application Verified Successfully",
            data: updateStatus
        })
    } catch (error) {
        
    }

}
export const rejectDeathApplications = async (req, res) => {
    try {
        const { id } = req.params;
        if (!id || id == 0) {
            return res.status(400).json({
                message: "Please enter a valid id"
            })
        }
        const applicationFound = await Death.findById(id);
        if (!applicationFound) {
            return res.status(400).json({
                message: "No application with this id"
            })
        }
        const rejectApplication = await Death.findByIdAndDelete(id);
        res.status(200).json({
            message: `The Death Application with id: ${id} is rejected successfully`
        })
    } catch (error) {
        console.error(error)
        res.status(500).send({
            error: 'Internal Server Error'
        })
    }

}
