import { LogOut, Sun, Moon } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent
} from '@/components/ui/dropdown-menu'
import { Button } from './ui/button'
import { authService } from '@/api/auth-service'
import { useCallback } from 'react'
import { useNavigate } from '@tanstack/react-router'
import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar'
import { useAuthStore } from '@/stores/auth-store'
import { useTheme } from '@/components/theme-provider'

export function NavUser() {
  const navigate = useNavigate()
  const { setTheme } = useTheme()
  const user = useAuthStore((s) => s.user)

  const logout = useCallback(() => {
    authService.logout()
    navigate({ to: '/login' })
  }, [])

  const username = user?.username || 'User'
  const avatarUrl = `https://ui-avatars.com/api/?name=${username}&background=random`

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="h-auto flex items-center justify-center">
          <Button size="lg" className="p-0 h-auto rounded-full cursor-pointer">
            <Avatar>
              <AvatarImage src={avatarUrl} />
              <AvatarFallback>{username.substring(0, 2).toUpperCase()}</AvatarFallback>
            </Avatar>
          </Button>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
        align="end"
        sideOffset={4}
      >
        <DropdownMenuLabel className="p-0 font-normal">
          <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
            <Avatar>
              <AvatarImage src={avatarUrl} />
              <AvatarFallback>{username.substring(0, 2).toUpperCase()}</AvatarFallback>
            </Avatar>
            <div className="grid flex-1 text-left text-sm leading-tight">
              <span className="truncate font-semibold">{username}</span>
              <span className="truncate text-xs">{user?.email || ''}</span>
            </div>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuLabel className="text-xs font-light opacity-60">Preferences</DropdownMenuLabel>
        
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>
            <div className="flex items-center">
                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="ml-2">Theme</span>
            </div>
          </DropdownMenuSubTrigger>
          <DropdownMenuSubContent>
            <DropdownMenuItem onClick={() => setTheme('light')}>Light</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme('dark')}>Dark</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme('system')}>System</DropdownMenuItem>
          </DropdownMenuSubContent>
        </DropdownMenuSub>

        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={logout}>
          <LogOut />
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
