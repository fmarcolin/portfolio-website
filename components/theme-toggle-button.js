const { motion, AnimatePresence } = require("framer-motion");
import { MoonIcon, SunIcon } from "@chakra-ui/icons"
import { IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react"

const ThemeToggleButton = () => {
    const { toggleColorMode } = useColorMode()

    return (
        <AnimatePresence exitBeforeEnter initial={false}>
            <motion.div 
                style={{display: "inline-block"}} 
                key={useColorModeValue('light', 'dark')}
                initial={{y: -20, opacity: 0}}
                animate={{y: 0, opacity: 1}}
                exit={{y: 20, opacity: 0}}
                transition={{duration: 0.2}}>
                <IconButton
                    aria-label="Toggle theme"
                    colorScheme={useColorModeValue('purple', 'orange')}
                    icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
                    onClick={toggleColorMode}>

                </IconButton>
            </motion.div>
        </AnimatePresence>
    )
}

export default ThemeToggleButton